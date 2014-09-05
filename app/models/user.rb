class User < ActiveRecord::Base
  include Capitalize

  # Maximum number of tickets permittable
  MAX_TICKETS = 4

  before_validation :capitalize_names
  after_update :subscribe_mailchimp
  after_save :unsubscribe_mailchimp
  before_destroy :unsubscribe_mailchimp

  has_many :tickets, dependent: :destroy
  
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable, :recoverable,
         :rememberable, :trackable, :validatable, :confirmable, :async
         
  # Pagination
  paginates_per 100
  
  # Strip whitespaces
  auto_strip_attributes :email, :first_name, :last_name

  # Validations
  @@college_regex = /\A(.+)@(.+)\.ox\.ac\.uk\Z/  

  validates_format_of :email, with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/i
  validates_format_of :email, with: @@college_regex,  message: "must be from Oxford", unless: "admin?"
  validates :first_name, :last_name, :college, presence: true
  validate :hughs_only_if_email, unless: "admin?"
  
  def hughs_only_if_email
    if !email then return end
    match = email.match(@@college_regex)
    if match then email_college = match[2] else email_college = "" end
    errors.add(:base, "Email isn't from Hugh's") if (college == "st-hughs") && (email_college != "st-hughs")
  end

  def self.paged(page_number)
    order(admin: :desc, email: :asc).page page_number
  end
  
  def self.search_and_order(search, page_number)
    if search
      q = "%#{search}%"
      where("email LIKE ? OR first_name LIKE ? or last_name LIKE ? or college LIKE ?", q, q, q, q).order(
      admin: :desc, email: :asc
      ).page page_number
    else
      order(admin: :desc, email: :asc).page page_number
    end
  end
  
  def self.last_signups(count)
    order(created_at: :desc).limit(count).select("id","email","created_at")
  end
  
  def self.last_signins(count)
    order(last_sign_in_at: 
    :desc).limit(count).select("id","email","last_sign_in_at")
  end
  
  def self.users_count
    where("admin = ? AND locked = ?",false,false).count
  end

  private
   def unsubscribe_mailchimp
     if self.tickets.length > 0
       # has purchased tickets previously, so let's remove
       MailchimpUnsubscriber.perform_async(self.email_was, "post_purchase_list")
     end
   end

   def subscribe_mailchimp
     if self.tickets.length > 0
       # has purchased tickets previously, so let's add again
       MailchimpSubscriber.perform_async(self.id, "post_purchase_list")
     end
   end
end

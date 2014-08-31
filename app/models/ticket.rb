class Ticket < ActiveRecord::Base
  include Capitalize

  belongs_to :user
  after_create :subscribe_mailchimp
  before_validation :capitalize_names

  # Strip whitespaces
  auto_strip_attributes :first_name, :last_name

  # Validations
  validates :first_name, :last_name, :email, :user_id, presence: true
  validates_format_of :email, with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/i
  validates :wristband_id, uniqueness: true, allow_nil: true

  # Pagination
  paginates_per 100

  def self.paged(page_number)
    order(id: :asc).page page_number
  end

  def self.search_and_order(search, page_number)
    if search
      q = "%#{search}%"
      joins(:user).where('tickets.first_name LIKE ? OR tickets.last_name LIKE ? OR tickets.wristband_id LIKE ? 
			 OR tickets.email LIKE ? OR users.email LIKE ?', q, q, q, q, q).order(id: :asc).page page_number
    else
      order(id: :asc).page page_number
    end
  end

  def self.last_ticket_purchases(count)
    order(created_at: :desc).limit(count)
  end

  private
    def subscribe_mailchimp
          mailchimp = Mailchimp::API.new(ENV["MAILCHIMP_API_KEY"])
          mailchimp.lists.subscribe(ENV["ATTENDEES_LIST_TEST"], {"email" => self[:email]},
                                    {"FNAME" => self[:first_name], "LNAME" => self[:last_name]}, 
                                    "html", false, true, false, false)
    end
end

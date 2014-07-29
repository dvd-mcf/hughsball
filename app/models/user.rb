class User < ActiveRecord::Base
  # Maximum number of tickets permittable
  MAX_TICKETS = 5

  has_many :tickets, dependent: :destroy
  
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :confirmable
         
  # Pagination
  paginates_per 100
  
  # Validations
  # :email
  validates_format_of :email, with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/i
  validates :first_name, :last_name, :college, presence: true
  
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
    order(created_at: :desc).limit(count).select("id","email","slug","created_at")
  end
  
  def self.last_signins(count)
    order(last_sign_in_at: 
    :desc).limit(count).select("id","email","slug","last_sign_in_at")
  end
  
  def self.users_count
    where("admin = ? AND locked = ?",false,false).count
  end
end

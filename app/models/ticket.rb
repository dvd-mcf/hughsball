class Ticket < ActiveRecord::Base
  belongs_to :user

  # Strip whitespaces
  auto_strip_attributes :first_name, :last_name

  # Validations
  validates :first_name, :last_name, :email, :user_id, presence: true
  validates_format_of :email, with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/i

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
end

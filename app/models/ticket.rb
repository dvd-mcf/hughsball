class Ticket < ActiveRecord::Base
  belongs_to :user

  # Strip whitespaces
  auto_strip_attributes :first_name, :last_name

  # Validations
  validates :first_name, :last_name, :user_id, presence: true

  # Pagination
  paginates_per 100

  def self.paged(page_number)
    order(id: :asc).page page_number
  end

  def self.search_and_order(search, page_number)
    if search
      q = "%#{search}%"
      joins(:user).where('tickets.first_name LIKE ? OR tickets.last_name LIKE ? OR users.email LIKE ?',
         q, q, q).order(id: :asc).page page_number
    else
      order(id: :asc).page page_number
    end
  end

  def self.last_ticket_purchases(count)
    order(created_at: :desc).limit(count)
  end
end

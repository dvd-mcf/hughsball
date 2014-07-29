class Admin::BaseController < ApplicationController
  before_filter :require_admin!
  
  def index
    @last_signups = User.last_signups(10)
    @last_signins = User.last_signins(10)
    @last_ticket_purchases = Ticket.last_ticket_purchases(10)
    @user_count = User.users_count 
    @ticket_count = Ticket.count

  end
end

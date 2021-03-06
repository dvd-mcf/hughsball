class Admin::TicketsController < Admin::BaseController
  before_action :set_ticket, only: [
    :show,
    :edit,
    :update,
    :destroy
  ]
  

  def index
    @tickets = Ticket.search_and_order(params[:search], params[:page])
  end
  
  def show
    redirect_to edit_admin_ticket_path(params[:id])
  end
  
  def edit
  end

  def new
    @ticket = Ticket.new
    @user = User.find(params[:user_id])
  end

  def create
    @user = User.find(params[:user_id])
    @ticket = Ticket.new(ticket_params.merge(user: @user))
    if @ticket.valid?
      @ticket.save
      redirect_to admin_tickets_path, notice: "#{@ticket.user.email}'s ticket created."
    else
      @errors = @ticket.errors
      flash.now[:error] = @errors.full_messages[0]
      render 'new'
    end
  end
  
  def update
    if @ticket.update_attributes(ticket_params)
      redirect_to admin_tickets_path, notice: "#{@ticket.user.email}'s ticket updated."
    else
      @errors = @ticket.errors
      flash.now[:error] = @errors.full_messages[0]
      render 'edit'
    end
  end

  def destroy
    @ticket.destroy
    flash[:notice] = "#{@ticket.first_name}'s ticket deleted."
    redirect_to admin_tickets_path
  end
  
  
  private 
  
  def set_ticket
    @ticket = Ticket.find(params[:id])
  rescue
    flash[:alert] = "The ticket with an id of #{params[:id]} doesn't exist."
    redirect_to admin_tickets_path
  end
  
  def ticket_params
    params.require(:ticket).permit(
    :first_name,
    :last_name,
    :email,
    :wristband_id
    )
  end
  
end

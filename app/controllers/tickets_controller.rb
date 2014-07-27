class TicketsController < ApplicationController
  before_action :authenticate_user!

  def index
    @ticket_num = 0
  end

  def edit
    @ticket = current_user.tickets[params[:id].to_i]
    check_ticket_exists()
    @id = params[:id]
  end

  def update
    @ticket = current_user.tickets[params[:id].to_i]
    check_ticket_exists()

    if @ticket.update_attributes(ticket_params)
      flash[:notice] = "Ticket updated!"
      redirect_to tickets_path
    else 
      @errors = @ticket.errors
      render 'edit', id: params[:id]
    end
  end

  def create
    @num_tickets = params[:tickets].size
    
    if @num_tickets > User::MAX_TICKETS
      redirect_to tickets_path
      flash[:error] = "You can only buy #{User::MAX_TICKETS} tickets."
    end

    @amount = 9000 * @num_tickets
    customer = Stripe::Customer.create(
      :email => params[:stripeEmail],
      :card  => params[:stripeToken]
    )
    charge = Stripe::Charge.create(
      :customer    => customer.id,
      :amount      => @amount,
      :description => current_user.email,
      :currency    => 'gbp'
    )
  
    params[:tickets].each_value do |ticket|
      current_user.tickets.create!(first_name: ticket["first_name"][" "], last_name: ticket["last_name"][" "])
    end
      
    redirect_to tickets_path

    rescue Stripe::CardError => e
      flash[:error] = e.message
      redirect_to tickets_path
  end

  def new
  end

  private
    def ticket_params
      params.require(:ticket).permit(:first_name, :last_name)
    end
   
    def check_ticket_exists
      if !@ticket then 
        flash[:error] = "You don't have that many tickets."
        redirect_to tickets_path
      end
    end
end

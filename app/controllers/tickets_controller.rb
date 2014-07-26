class TicketsController < ApplicationController
  before_action :authenticate_user!

  def index
    @ticket_num = 0
  end

  def edit
    @ticket = current_user.tickets[params[:id].to_i]
    @id = params[:id]
  end

  def update
    @ticket = current_user.tickets[params[:ticket][:id].to_i]
    if @ticket.update_attributes(ticket_params)
      flash[:notice] = "Ticket updated!"
      redirect_to tickets_path
    else 
      redirect_to edit_tickets_path(params[:ticket][:id])
    end
  end

  def create
    # Amount in cents
    @amount = 2000
    customer = Stripe::Customer.create(
      :email => params[:stripeEmail],
      :card  => params[:stripeToken]
    )
    charge = Stripe::Charge.create(
      :customer    => customer.id,
      :amount      => @amount,
      :description => 'Rails Stripe customer',
      :currency    => 'gbp'
    )
  
    puts "payment was charged"
    puts "number of parameters: " +  params.length.to_s
    puts "number of tickets: " + params[:tickets].length.to_s
    puts params[:tickets]["1"]
    params[:tickets].each_value do |ticket|
      current_user.tickets.create!(first_name: ticket["first_name"][" "], last_name: ticket["last_name"][" "], bod_num: ticket["bod_num"][" "], college: 'st-hughs')
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
end

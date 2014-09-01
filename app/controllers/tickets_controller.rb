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
    @id = params[:id]

    if @ticket.update_attributes(ticket_params)
      flash[:notice] = "Ticket updated!"
      redirect_to tickets_path
    else 
      @errors = @ticket.errors
      flash.now[:error] = @errors.full_messages[0]
      render 'edit'
    end
  end

  def create
    @curr_tickets = current_user.tickets.size
    @num_tickets = params[:tickets].size
    @discount = 0
    @tickets = []
    
    if current_user.college == "st-hughs" && current_user.tickets.size == 0 then @discount = 500 end
    
    if @num_tickets + @curr_tickets > User::MAX_TICKETS
      flash[:error] = "You can only buy #{User::MAX_TICKETS} tickets."
      return redirect_to tickets_path
    end

    params[:tickets].each_value do |ticket|
      @t = current_user.tickets.new(first_name: ticket["first_name"][" "],
                                    last_name: ticket["last_name"][" "], email: ticket["email"][" "])
      if @t.valid?
        @tickets += [@t]
      else
        flash[:error] = "Your tickets details were problematic. You weren't charged."
        return redirect_to tickets_path
      end
    end

    @amount = 9000 * @num_tickets - @discount

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

    for t in @tickets
      t.save(validate:false)
    end

    # add to mailing list
    mailchimp = Mailchimp::API.new(ENV["MAILCHIMP_API_KEY"])
    mailchimp.lists.subscribe(ENV["POST_PURCHASE_LIST_TEST"], {"email" => current_user.email},
                              {"FNAME" => current_user.first_name, "LNAME" => current_user.last_name,
                               "COLLEGE" => current_user.college, "NUM_TICKET" => @curr_tickets + @num_tickets },
                              "html", false, true, true, false)

    redirect_to tickets_path

    rescue Stripe::CardError => e
      flash[:error] = e.message
      return redirect_to tickets_path
  end

  def new
  end

  private
    def ticket_params
      params.require(:ticket).permit(:first_name, :last_name, :email)
    end
   
    def check_ticket_exists
      if !@ticket then 
        flash[:error] = "You don't have that many tickets."
        redirect_to tickets_path
      end
    end
end

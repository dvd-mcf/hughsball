class MailchimpWorker
  include Sidekiq::Worker

  def perform(id, type)
    require "mailchimp"
    mailchimp = Mailchimp::API.new(ENV["MAILCHIMP_API_KEY"])
    if type == "post_purchase_list"
      @user = User.find(id)
      mailchimp.lists.subscribe(ENV["POST_PURCHASE_LIST_TEST"], {"email" => @user.email},
                                {"FNAME" => @user.first_name, "LNAME" => @user.last_name,
                                 "COLLEGE" => @user.college, "NUM_TICKET" => @user.tickets.count },
                                 "html", false, true, true, false)
    elsif type == "attendees_list"
      @ticket = Ticket.find(id)
      mailchimp.lists.subscribe(ENV["ATTENDEES_LIST_TEST"], {"email" => @ticket.email},
                                {"FNAME" => @ticket.first_name, "LNAME" => @ticket.last_name}, 
                                "html", false, true, false, false)

    end
  end
end

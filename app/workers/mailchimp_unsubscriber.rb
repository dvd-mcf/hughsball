class MailchimpUnsubscriber
  include Sidekiq::Worker

  def perform(email, type)
    require "mailchimp"
    mailchimp = Mailchimp::API.new(ENV["MAILCHIMP_API_KEY"])
    if type == "post_purchase_list"
      mailchimp.lists.unsubscribe(ENV["POST_PURCHASE_LIST_TEST"], {"email" => email})
    elsif type == "attendees_list"
      mailchimp.lists.unsubscribe(ENV["ATTENDEES_LIST_TEST"], {"email" => email})
    end
  end
end

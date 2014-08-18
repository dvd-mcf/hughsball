Railstest::Application.routes.draw do
  get "tickets/ticket_form", to: "helper#ticket_form", as: "ticket_form"
  root "pages#home"    
  get "home", to: "pages#home", as: "home"
  resources :tickets
  
    
  devise_for :users, :controllers => { registrations: 'registrations' }

  
  namespace :admin do
    root "base#index"
    resources :users, :tickets
  end
  
end

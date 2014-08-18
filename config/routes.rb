Railstest::Application.routes.draw do
  root "pages#home"    
  get "home", to: "pages#home", as: "home"
  resources :tickets
  
    
  devise_for :users, :controllers => { registrations: 'registrations' }

  
  namespace :admin do
    root "base#index"
    resources :users, :tickets
  end
  
end

Rails.application.routes.draw do
  devise_for :users, controllers: {
    registrations: 'users/sign_up/registrations',
  }

  root to: 'products#index'

  resources :users, only: [:edit, :new]

  namespace :users do
    namespace :sign_up do
      # get 'address', to: 'address#new'
      # get 'payment_methods', to: 'payment_methods#new'
      get 'registrations', to: 'registrations#new'

      # resources :address, only: [:create]
      # resources :payment_methods, only: [:create]
      # resources :done, only: [:index]
    end
  end
  # devise_scope :user do
  #   get 'users', to: 'devise/sessions#new'
  # end
end

Rails.application.routes.draw do
  devise_for :users, controllers: {
    registrations: 'users/sign_up/registrations',
  }

  root to: 'products#index'
  resources :products

  resources :users, only: [:edit, :new, :show]

  namespace :users do
    namespace :sign_up do
      get 'address', to: 'address#new'
      get 'registrations', to: 'registrations#new'
      resources :address, only: [:create]
    end
  end
end

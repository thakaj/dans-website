Rails.application.routes.draw do
  devise_for :admins
  devise_for :students, controllers: {sessions: 'user/sessions'}
  resources :appointments
  resources :instruments
  resources :pdfs
  resource :students, only: [:show, :destroy]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  

end

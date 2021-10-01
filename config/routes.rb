Rails.application.routes.draw do
  devise_for :admins
  devise_for :students
  resources :appointments
  resources :instruments
  resources :pdfs
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  

end

Rails.application.routes.draw do
  devise_for :admins
  devise_for :students, path: '', path_names: {
    sign_in: 'login',
    sign_out: 'logout',
    registration: 'signup'
  },
  controllers: {
    sessions: 'student/sessions',
    registrations: 'student/registrations'
  }
  get 'current_student/', to: 'current_student#index'
  resources :appointments
  resources :instruments
  resource :students, only: [:show, :destroy]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  

end

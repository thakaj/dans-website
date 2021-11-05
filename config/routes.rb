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
  get 'student/:id', to: 'students#show'
  delete 'student/:id', to: 'students#destroy'
  patch 'student/:id', to: 'students#update'
  get 'instruments/:i_id/pdfs/:p_id', to: 'instruments#download'
  get 'instruments/:id/pdfs', to: 'instruments#show_pdf'
  # resources :students, only: [:show, :destroy, :update]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

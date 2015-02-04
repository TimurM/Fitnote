Fitnote::Application.routes.draw do
  root to: 'static_pages#root'

  resources :users
  resource :session

  namespace :api do
    resources :notebooks
    resources :notes
  end
end

# , defaults: {format: :json} 

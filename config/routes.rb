Fitnote::Application.routes.draw do
  root to: 'static_pages#root'

  resources :users
  resource :session

  namespace :api do
    resources :notebooks
    resources :notes
    resources :tags
    resources :taggings
  end
end

# , defaults: {format: :json}

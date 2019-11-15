Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :update, :destroy]
    resources :games, only: [:index, :show]
    resources :newspapers, only: [:index, :show] do 
      resources :comments, only: [:show, :create, :update, :destroy]
    end
    
    resource :session, only: [:create, :destroy]
  end

  root to:'static_pages#root'

end

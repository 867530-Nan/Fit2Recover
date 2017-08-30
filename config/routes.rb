Rails.application.routes.draw do
  namespace :api do
    get 'blogs/index'
  end

  namespace :api do
    get 'instagram/index'
  end

  namespace :api do
    get 'instagram/service'
  end

  namespace :api do
    resources :testimonials
  end

  namespace :api do
    #API ROUTES SHOULD GO HERE
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end

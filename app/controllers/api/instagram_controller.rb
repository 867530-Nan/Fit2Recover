class Api::InstagramController < ApplicationController
  def index
  	instagram = HTTParty.get("https://api.instagram.com/v1/users/self/media/recent/?access_token=",
  	{query:
      {access_token: ENV['INSTAGRAM_ACCESS_TOKEN'],
            count: 	'8'}
  				})
    binding.pry
      render json: instagram
  end

  def home
    instagram = HTTParty.get("https://api.instagram.com/v1/users/self/media/recent/?access_token=",
    {query:
      {access_token: ENV['INSTAGRAM_ACCESS_TOKEN'],
            count:  '1'}
          })
      render json: instagram
  end

  def service
  	instagram = HTTParty.get("https://api.instagram.com/v1/users/self/media/recent/?access_token=",
      {query: 
       {access_token: ENV['INSTAGRAM_SERVICE_TOKEN'],
        count: '4'}
      })
      render json: instagram
  end

end


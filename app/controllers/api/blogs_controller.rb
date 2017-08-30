class Api::BlogsController < ApplicationController

  def index
  	nutrition = HTTParty.get("https://www.googleapis.com/blogger/v3/blogs/#{ENV['BLOG_ID']}/posts?fetchImages=true&maxResults=10&orderBy=published&key=#{ENV['BLOGGER_API_KEY']}")

      render json: nutrition
  end
end

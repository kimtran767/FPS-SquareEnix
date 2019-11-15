class Api::NewspapersController < ApplicationController

    def index 
        @newspapers = Newspaper.all
        render :index
    end

    def show 
        @newspaper = Newspaper.includes(:pulps, :comments).find(params[:id])
        render :show
    end

    
end

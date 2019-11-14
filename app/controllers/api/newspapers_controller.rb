class Api::NewspapersController < ApplicationController

    def index 
        @newspapers = Newspaper.all
        render :index
    end

    def show 
        @newspaper = Newspaper.includes(:pulps).find(params[:id])
        render :show
    end

    
end

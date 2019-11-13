class Api::SubArticlesController < ApplicationController

    def index 
        @sub_articles = SubArticle.all
        render :index
    end

    def show 
        @sub_article = SubArticle.find(params[:id])
    end
    
end
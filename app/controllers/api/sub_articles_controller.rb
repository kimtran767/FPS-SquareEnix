class Api::SubArticlesController < ApplicationController

    def index 
        @sub_articles = SubArticle.all
        render :index
    end
end
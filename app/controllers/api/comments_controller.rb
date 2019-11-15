class Api::CommentsController < ApplicationController

    before_action :require_logged_in

    def show 
        @comment = Comment.find(params[:id])
    end

    def create
        @comment = Comment.new(comment_param)
        @comment.news_id = params[:newspaper_id]
        @comment.user_id = current_user.id

        if @comment.save
            render 'api/comments/show'
        else
            render @comment.errors.full_messages, status: 422
  
        end

    end

    def update
        @comment = Comment.find(params[:id])

        if @comment.update(comment_param)
            render 'api/comments/show'
        else
            render @comment.errors.full_messages, status: 422

        end
    end

    def destroy
        @comment = Comment.find(params[:id])
        @comment.destroy
        render 'api/comments/show'
    end

    private

    def comment_param 
        params.require(:comment).permit(:body)
    end

end

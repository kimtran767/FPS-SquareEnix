@comments.each do |comment|
    json.set! comment.id do
        json.extract! comment, :body, :news_id, :user_id, :id
    end
end
@comments.each do |comment|
    json.set! comment.id do
        json.extract! comment, :body, :news_id, :author, :id, :date
    end
end
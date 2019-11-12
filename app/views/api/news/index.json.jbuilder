@articles.each do |article|
    json.set! article.id do 
        json.extract! article, :id, :title, :date, :body, :author, :game_id
    end
end
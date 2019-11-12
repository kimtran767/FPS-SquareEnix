@articles.each do |article|
    json.set article.id do 
        json.extract! article, :id, :title, :date, :body, :game_id, :author
    end
end


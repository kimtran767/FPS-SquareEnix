@sub_articles.each do |sub|
    json.set sub.id do 
        json.extract! sub, :title, :body, :article_id, :ord
    end
end
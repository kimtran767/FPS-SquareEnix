@games.each do |game|
    json.set! game.id do
        json.extract! game, :id, :title, :description
        json.photoUrls game.photos.map { |file| url_for(file) }
    end
end




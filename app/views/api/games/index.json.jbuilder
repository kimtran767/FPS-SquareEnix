@games.each do |game|
    json.set! game.id do
        json.extract! game, :id, :title, :description, :img_url
    end
end




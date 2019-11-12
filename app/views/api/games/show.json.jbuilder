json.extract! @game, :title, :id, :description
json.photoUrls @game.photos.map { |file| url_for(file) }
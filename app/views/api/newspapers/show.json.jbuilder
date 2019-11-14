json.newspaper do 
    json.extract! @newspaper, :id, :title, :date, :body, :author
    
end



json.pulps do 
    @newspaper.pulps.each do |pulp|
        json.set! pulp.id do
            json.extract! pulp, :title, :id, :body, :newspapers_id
            
            if pulp.photo.attached?
                json.photoUrl url_for(pulp.photo)
            end

        end

    end
end


# json.photoUrls @game.photos.map { |file| url_for(file) }

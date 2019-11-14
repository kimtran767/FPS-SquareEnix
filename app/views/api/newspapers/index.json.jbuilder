@newspapers.each do |newspaper|
    json.set! newspaper.id do 
        json.extract! newspaper, :id, :title, :date, :body, :author
        if newspaper.photo.attached?
            json.photoUrl url_for(newspaper.photo)
        end

    end
end





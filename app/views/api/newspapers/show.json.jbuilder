json.newspaper do 
    json.extract! @newspaper, :id, :title, :date, :body, :author
        if @newspaper.photo.attached?
            json.photoUrl url_for(@newspaper.photo)
        end
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

json.comments do 
    @newspaper.comments.each do |comment|
        json.set! comment.id do
            json.extract! comment, :body, :news_id, :author, :id, :date
        end
    end
end

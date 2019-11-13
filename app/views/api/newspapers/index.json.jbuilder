@newspapers.each do |newspaper|
    json.set! newspaper.id do 
        json.extract! newspaper, :id, :title, :date, :body, :author
    end
end


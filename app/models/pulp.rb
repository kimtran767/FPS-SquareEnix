class Pulp < ApplicationRecord

    belongs_to :newspaper,
    foreign_key: :newspapers_id,
    class_name: :Newspaper

    has_one_attached :photo
end

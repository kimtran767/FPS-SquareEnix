class Article < ApplicationRecord

    belongs_to :game,
    foreign_key: :game_id,
    class_name: :Game

    has_one_attached :photo
    has_many :sub_article
    
end

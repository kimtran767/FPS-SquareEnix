class Game < ApplicationRecord
    
    validates :title, :description, presence: true
    validates :title, uniqueness: true


    has_many_attached :photos
    has_many :articles
end

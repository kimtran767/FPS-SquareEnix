class Newspaper < ApplicationRecord

    has_many :pulps,
    foreign_key: :newspapers_id,
    class_name: :Pulp

    has_one_attached :photo
end

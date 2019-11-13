class Pulp < ApplicationRecord

    belongs_to :newspapers,
    foreign_key: :newspapers_id,
    className: :Newspapers
end

# == Schema Information
#
# Table name: games
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Game < ApplicationRecord
    
    validates :title, :description, presence: true
    validates :title, uniqueness: true


    has_many_attached :photos
    # has_many :newspapers
end

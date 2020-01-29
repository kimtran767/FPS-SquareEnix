# == Schema Information
#
# Table name: pulps
#
#  id            :integer          not null, primary key
#  title         :string
#  body          :text             not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  newspapers_id :integer          not null
#

class Pulp < ApplicationRecord

    belongs_to :newspaper,
    foreign_key: :newspapers_id,
    class_name: :Newspaper

    has_one_attached :photo
end

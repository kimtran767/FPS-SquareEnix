# == Schema Information
#
# Table name: newspapers
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  date       :date             not null
#  body       :text             not null
#  author     :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Newspaper < ApplicationRecord

    has_many :pulps,
    foreign_key: :newspapers_id,
    class_name: :Pulp

    has_many :comments,
    foreign_key: :news_id,
    class_name: :Comment

    has_one_attached :photo
end

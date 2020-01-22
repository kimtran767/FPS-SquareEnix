# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  body       :text             not null
#  news_id    :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord

    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

    belongs_to :news,
    foreign_key: :news_id,
    class_name: :Newspaper


    def author
        self.user.username
    end

    def date
        created_at.strftime("%m/%d/%Y")
    end
end

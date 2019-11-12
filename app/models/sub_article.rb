class SubArticle < ApplicationRecord

    validates :title, :body, :article_id, :ord, presence: true
    validates :ord, uniqueness: { scope: :article_id}


    has_one_attached :photo

    belongs_to :article,
    foreign_key: :article_id,
    class_name: :Article
end

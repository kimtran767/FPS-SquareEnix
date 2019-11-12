class CreateSubArticles < ActiveRecord::Migration[5.2]
  def change
    create_table :sub_articles do |t|
      t.string :title
      t.text :body, null: false

      t.integer :article_id, null: false
      t.integer :ord, null: false
      t.timestamps
    end
  end
end

class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      
      t.text :body, null: false
      t.bigint :news_id, null: false
      t.bigint :user_id, null: false

      t.timestamps
    end
  end
end

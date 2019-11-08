class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.string :img_url
      t.timestamps
    end

    add_index :games, :title, unique: true
  end
end

class CreateNews < ActiveRecord::Migration[5.2]
  def change
    create_table :news do |t|
      t.string :title, null: false
      t.date :date, null: false
      t.text :body, null: false
      t.bigint :game_id
      t.string :author, null: false
      t.timestamps
    end

    add_index :news, :title, unique: true
  end
end

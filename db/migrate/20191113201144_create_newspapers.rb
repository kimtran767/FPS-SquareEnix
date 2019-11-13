class CreateNewspapers < ActiveRecord::Migration[5.2]
  def change
    create_table :newspapers do |t|
      t.string :title, null: false
      t.date :date, null: false
      t.text :body, null: false
      t.bigint :game_id
      t.string :author, null: false

      t.timestamps
    end

    add_index :newspapers, :title
  end
end

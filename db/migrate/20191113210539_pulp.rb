class Pulp < ActiveRecord::Migration[5.2]
  def change
    create_table :pulps do|t|
      t.string :title
      t.text :body, null: false
      t.timestamps
    end
  end
end

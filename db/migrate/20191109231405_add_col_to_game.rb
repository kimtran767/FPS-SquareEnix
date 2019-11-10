class AddColToGame < ActiveRecord::Migration[5.2]
  def change
    add_column :games, :logo, :string
    add_column :games, :background_img, :string
    add_column :games, :store_id, :bigint
  end
end



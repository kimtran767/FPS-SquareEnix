class RemoveColFromGames < ActiveRecord::Migration[5.2]
  def change
    remove_column :games, :logo
    remove_column :games, :background_img
    remove_column :games, :store_id
  end
end

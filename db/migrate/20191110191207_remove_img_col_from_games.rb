class RemoveImgColFromGames < ActiveRecord::Migration[5.2]
  def change
        remove_column :games, :img_url
  end
end

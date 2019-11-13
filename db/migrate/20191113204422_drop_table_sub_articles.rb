class DropTableSubArticles < ActiveRecord::Migration[5.2]
  def change
    drop_table :sub_articles
    remove_column :newspapers, :game_id
  end
end

class RemovePulp < ActiveRecord::Migration[5.2]
  def change
    drop_table :pulps
  end
end

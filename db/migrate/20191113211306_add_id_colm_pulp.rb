class AddIdColmPulp < ActiveRecord::Migration[5.2]
  def change

    add_column :pulps, :newspapers_id, :bigint, null: false
  end
end

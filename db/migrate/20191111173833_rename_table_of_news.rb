class RenameTableOfNews < ActiveRecord::Migration[5.2]
  def change
    rename_table :news, :article
  end
end

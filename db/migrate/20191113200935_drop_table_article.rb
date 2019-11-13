class DropTableArticle < ActiveRecord::Migration[5.2]
  def change

    drop_table :article
  end
end

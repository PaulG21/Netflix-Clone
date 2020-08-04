class Add < ActiveRecord::Migration[5.2]
  def change
    add_column :movies, :content_rating, :string, null: false
  end
end

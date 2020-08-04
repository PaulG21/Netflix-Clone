class CreateMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.string :title, null: false
      t.string :genre, null: false
      t.text :description, null: false
      t.integer :movie_length, null: false
      t.integer :year, null: false
      t.string :cast, null: false

      t.timestamps
    end
  end
end

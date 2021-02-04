class RemoveMylistIndexMovies < ActiveRecord::Migration[5.2]
  def change
    remove_index :my_lists, name: "index_my_lists_on_movie_id"
    add_index :my_lists, :user_id
    add_index :my_lists, :movie_id
  end
end

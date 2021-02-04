class RemoveIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :my_lists, name: :index_users_on_username
  end
end

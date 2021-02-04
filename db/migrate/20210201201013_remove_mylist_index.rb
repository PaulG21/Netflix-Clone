class RemoveMylistIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :my_lists, name: "index_my_lists_on_user_id"
  end
end

class RemoveColumn < ActiveRecord::Migration[6.1]
  def change
    remove_column :artists, :museum_id, :integer
  end
end

class RenameColumn < ActiveRecord::Migration[6.1]
  def change
    rename_column :artists, :country, :birth_place
    rename_column :artists, :birth_year, :birth_date
  end
end

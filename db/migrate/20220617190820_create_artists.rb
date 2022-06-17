class CreateArtists < ActiveRecord::Migration[6.1]
  def change
    create_table :artists do |t|
      t.string :name
      t.string :art_movement
      t.string :country
      t.integer :birth_year
      t.integer :museum_id
      # the id column is generated automatically for every table! no need to specify it here.
    end

  end
end

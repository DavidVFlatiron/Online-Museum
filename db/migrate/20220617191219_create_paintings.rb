class CreatePaintings < ActiveRecord::Migration[6.1]
  def change
    create_table :paintings do |t|
      t.string :name
      t.string :location
      t.string :medium
      t.integer :year_created
      t.integer :artist_id
      # the id column is generated automatically for every table! no need to specify it here.
    end
  end
end

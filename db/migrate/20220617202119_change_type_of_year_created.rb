class ChangeTypeOfYearCreated < ActiveRecord::Migration[6.1]
  def change
    change_column :paintings, :year_created, :string
  end
end



class Unicorn
  puts self

  def self.create(col1:, col2:)
    table_name = Tablee_Name.new(col1: col1, col2: col2)
    table_name.save
  end


  def rainbow
      self
  end

  def self.all_unicorns
      self
  end

end
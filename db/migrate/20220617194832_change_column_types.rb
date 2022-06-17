class ChangeColumnTypes < ActiveRecord::Migration[6.1]
  def change
    change_column :artists, :birth_date, :string
  end
end

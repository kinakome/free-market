class CreateMiddleCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :middle_categories do |t|
      t.string :genre
      t.references :large_category, null: true, foreign_key: true
    end
  end
end

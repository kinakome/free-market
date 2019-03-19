class CreateSmallCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :small_categories do |t|
      t.string :genre
      t.references :middle_category, null: true, foreign_key: true
    end
  end
end

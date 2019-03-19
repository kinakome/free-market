class AddColumnCategories < ActiveRecord::Migration[5.2]
  def change
    add_reference :products, :large_category, index: true
    add_reference :products, :middle_category, index: true
    add_reference :products, :small_category, index: true
  end
end

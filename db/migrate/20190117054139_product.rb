class Product < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :name, :string, null: false
    add_column :products, :price, :integer, null: false
    add_column :products, :detail, :text, null: false
    add_column :products, :condition, :string, null: false
    add_column :products, :size, :string, null: false
    add_column :products, :shipping_cost, :integer, null: false
    add_column :products, :shipping_from, :string, null: false
    add_column :products, :shipping_date, :integer, null: false
    add_reference :products, :user
  end
end


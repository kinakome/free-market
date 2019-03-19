class Product < ApplicationRecord
  belongs_to :user
  has_many :images, dependent: :destroy
  accepts_nested_attributes_for :images, allow_destroy: true
  has_one :large_category
  has_one :middle_category
  has_one :small_category


  validates :price, inclusion: 300..9_999_999
  validates :detail,
            :name,
            :price,
            :size,
            :condition,
            :shipping_cost,
            :shipping_from,
            :shipping_date,
            :shipping_method,
            :large_category_id,
            :small_category_id,
            :middle_category_id,
            presence: true
end

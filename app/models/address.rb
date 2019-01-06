class Address < ApplicationRecord
  belongs_to :user

  validates :family_name,:first_name,:family_name_kana,:first_name_kana,:zipcode,:prefecture,:city,:block_number,presence: true
end

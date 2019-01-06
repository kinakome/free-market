module AddressesHelper

  def family_name_valid
    @address.errors.messages[:family_name].empty? ? "" : @address.errors.messages[:family_name].to_s.delete("\"").delete("[").delete("]")
  end

  def first_name_valid
    @address.errors.messages[:first_name].empty? ? "" : @address.errors.messages[:first_name].to_s.delete("\"").delete("[").delete("]")
  end

  def family_name_kana_valid
    @address.errors.messages[:family_name_kana].empty? ? "" : @address.errors.messages[:family_name_kana].to_s.delete("\"").delete("[").delete("]")
  end

  def first_name_kana_valid
    @address.errors.messages[:first_name_kana].empty? ? "" : @address.errors.messages[:first_name_kana].to_s.delete("\"").delete("[").delete("]")
  end

  def zipcode_valid
    @address.errors.messages[:zipcode].empty? ? "" : @address.errors.messages[:zipcode].to_s.delete("\"").delete("[").delete("]")
  end

  def city_valid
    @address.errors.messages[:city].empty? ? "" : @address.errors.messages[:city].to_s.delete("\"").delete("[").delete("]")
  end

  def block_number_valid
    @address.errors.messages[:block_number].empty? ? "" : @address.errors.messages[:block_number].to_s.delete("\"").delete("[").delete("]")
  end

end

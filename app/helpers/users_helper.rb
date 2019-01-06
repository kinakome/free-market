module UsersHelper
  def nickname_valid
  resource.errors[:nickname].empty? ? "" : resource.errors[:nickname].to_s.delete("\"").delete("[").delete("]")
  end

  def email_valid
  resource.errors[:email].empty? ? "" : resource.errors[:email].to_s.delete("\"").delete("[").delete("]")
  end

  def password_valid
    if resource.errors[:password].empty?
     ""
    else
      if resource.errors[:password].to_s.include?(",")
        resource.errors[:password].to_s.delete("\"").delete("[").delete("]").gsub(/,/, "・")
      else
        resource.errors[:password].to_s.delete("\"").delete("[").delete("]")
      end
    end
  end

  def confirmation_valid
  resource.errors[:password_confirmation].empty? ? "" : resource.errors[:password_confirmation].to_s.delete("\"").delete("[").delete("]")
  end

  def recaptcha_valid
  resource.errors[:base].empty? ? "" : resource.errors[:base].to_s.delete("\"").delete("[").delete("]")
  end


end

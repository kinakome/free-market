class Users::SignUp::AddressController < ApplicationController
  def new
    @address = Address.new
  end

  def create
    @address = Address.create(address_params)
    if @address.save
      redirect_to users_sign_up_payment_methods_path
    else
      render :new
    end
  end

  private

  def address_params
    params.require(:address).permit(:family_name, :first_name, :family_name_kana,:first_name_kana, :zipcode, :prefecture, :city, :block_number, :building_name, :phone_number).merge(user_id: current_user.id)
  end

end

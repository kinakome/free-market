class Users::SignUp::PaymentMethodsController < ApplicationController
  def new
    @payjp_card_form = PaymentMethod.new
  end
end

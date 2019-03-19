class ProductsController < ApplicationController
  def index
  end

  def new
    @product = Product.new
    @large_category = LargeCategory.all
    @middle_category = MiddleCategory.where(large_category_id: params[:id])
    @small_category = SmallCategory.where(middle_category_id: params[:smallId])
    @image = Image.new
    @images = 4.times { @product.images.build }
    if(params[:keyword].present?)
      @brands = Brand.where("name LIKE(?)", "%#{params[:keyword]}%")
    end
    respond_to do |format|
      format.html
      format.json
    end
  end
  def create
    binding.pry
    @product = Product.new(product_params)
    @image = Image.new(image_params)
    if @product.save
      @image.save
      redirect_to root_path
    else
      redirect_to root_path
    end
  end

  private

  def product_params
    params.require(:product).permit(:name, :price,:detail,:condition,:size,:shipping_cost,:shipping_from,:shipping_date,:shipping_method,:large_category_id,:middle_category_id,:small_category_id,:brand,images_attributes: [image: []]).merge(user_id: current_user.id)
  end

  def image_params
    params.require(:product).permit(images_attributes: [image: []]).merge(product_id: 1)
  end
end

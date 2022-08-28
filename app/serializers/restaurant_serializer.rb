class RestaurantSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :slug, :image_url, :location
  has_many :reviews
end

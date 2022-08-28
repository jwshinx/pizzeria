class RestaurantSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :slug, :image_url, :location
end

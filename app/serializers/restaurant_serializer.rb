class RestaurantSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :slug, :image_url, :location, :avg_score
  has_many :reviews
end

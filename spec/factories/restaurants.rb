FactoryBot.define do
  factory :restaurant do
    sequence(:name) { |i| "restaurant-#{i}" }
    sequence(:image_url) { |i| "https://someimage-#{i}" }
    sequence(:location) { |i| "some-location-#{i}" }
    sequence(:slug) { |i| "restaurant-#{i}" }
  end
end

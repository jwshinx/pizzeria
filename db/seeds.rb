# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Restaurant.create([
  {
    name: "Joe's Pizzeria",
    image_url: "https://unsplash.com/photos/L8V5XU7-MR4",
    location: "nyc"
  },
  {
    name: "Pizzeria Delfina",
    image_url: "https://unsplash.com/photos/exSEmuA7R7k",
    location: "SF, CA"
  }
])

r = Restaurant.where(location: 'nyc').first
Review.create([
  {
    title: "amazing",
    description: "classic nyc pizza, the best",
    score: 10,
    restaurant_id: r.id
  },
  {
    title: "very good sauce",
    description: "not enough cheese",
    score: 9,
    restaurant_id: r.id
  },
])

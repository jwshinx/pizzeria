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
    image_url: "https://images.unsplash.com/photo-1579751626657-72bc17010498?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjg5N3wwfDF8c2VhcmNofDE3fHxwaXp6YXxlbnwwfHx8fDE2NjE4Nzc2Njg&ixlib=rb-1.2.1&q=80&w=400",
    location: "nyc"
  },
  {
    name: "Pizzeria Delfina",
    image_url: "https://images.unsplash.com/photo-1581873372796-635b67ca2008?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjg5N3wwfDF8c2VhcmNofDIwfHxwaXp6YXxlbnwwfHx8fDE2NjE4Nzc2Njg&ixlib=rb-1.2.1&q=80&w=400",
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

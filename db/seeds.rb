# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

Movie.destroy_all
User.destroy_all

# DEMO USER

demoUser= User.create!({ username: 'demo', email: 'demouser@gmail.com', password: 'demouser'})

# MOVIES

Ip_Man_4 = Movie.create!(title: "Ip Man 4: The Finale", genre: 'action, adventure, drama', description: "Ip Man and his son encounter racial discrimination after traveling to the United States to seek a better life.", movie_length: 105, year: 2019, content_rating: "R", cast: "Donnie Yen, Scott Adkins, Danny Chan Kwowk-kwan, Wu Yue")
Ip_Man_4.movie.attach(io: open('https://netflix-clone-project-seeds.s3.amazonaws.com/ip-man-4-trailer-1_h1080p.mp4'), filename: 'Ip_Man_4')

John_Wick_3 = Movie.create!(title: "John Wick: Chapter 3 – Parabellum", genre: 'action, adventure, drama', description: "After gunning down a member of the High Table -- the shadowy international assassin's guild -- legendary hit man John Wick finds himself stripped of the organization's protective services. Now stuck with a $14 million bounty on his head, Wick must fight his way through the streets of New York as he becomes the target of the world's most ruthless killers.", movie_length: 131, year: 2019, content_rating: "R", cast: "Kanue Reeves, Halle Berry, Ian McShane, Laurence Fishburne")
John_Wick_3.movie.attach(io: open('https://netflix-clone-project-seeds.s3.amazonaws.com/john-wick-chapter-3-trailer-2_h1080p.mp4'), filename: "John_Wick_3")

Joker = Movie.create!(title: "Joker", genre: 'Action, Adventure, Drama, Mystery, Suspense', description: "Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he's part of the world around him. Isolated, bullied and disregarded by society, Fleck begins a slow descent into madness as he transforms into the criminal mastermind known as the Joker.", movie_length: 112, year: 2019, content_rating: "R", cast: "Joaquin Phoenix, Robert De Niro, Zazie Beetz, Frances Conroy")
Joker.movie.attach(io: open('https://netflix-clone-project-seeds.s3.amazonaws.com/joker-teaser-1_h1080p.mp4'), filename: "Joker")
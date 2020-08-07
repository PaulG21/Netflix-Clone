json.extract! movie, :title, :genre, :description, :movie_length, :year, :cast, :content_rating
json.movie_url url_for(movie.movie)
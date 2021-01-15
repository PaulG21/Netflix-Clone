class MyList < ApplicationRecord
    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :movie,
        foreign_key: :movie_id,
        class_name: :Movie
end
class MyList < ApplicationRecord
    validates :movie_id, uniqueness: {scope: :user_id}
    
    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    has_many :movie,
        foreign_key: :movie_id,
        class_name: :Movie
end
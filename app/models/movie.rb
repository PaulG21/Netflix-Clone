# == Schema Information
#
# Table name: movies
#
#  id             :bigint           not null, primary key
#  title          :string           not null
#  genre          :string           not null
#  description    :text             not null
#  movie_length   :integer          not null
#  year           :integer          not null
#  cast           :string           not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  content_rating :string           not null
#
class Movie < ApplicationRecord
  validates :title, :genre, :description, :movie_length, :year, :cast, :content_rating, presence: true

  has_one_attached :movie
end

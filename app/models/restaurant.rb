class Restaurant < ApplicationRecord
  has_many :reviews
  validates :name, presence: true, uniqueness: true
  validates :location, :image_url, presence: true
  validates_associated :reviews

  before_create :slugify

  def slugify
    self.slug = name.parameterize
  end

  def avg_score
    return 0 unless reviews.count.positive?

    reviews.average(:score).to_f.round(2)
  end
end

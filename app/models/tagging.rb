class Tagging < ActiveRecord::Base

  validates :note, :tag, presence: true
  validates :note, uniqueness: { scope: :tag }

  belongs_to :note, inverse_of: :taggings
  belongs_to :tag, inverse_of: :taggings

  has_one(
    :owner,
    through: :note,
    source: :owner
  )

end

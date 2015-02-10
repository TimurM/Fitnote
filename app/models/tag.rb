class Tag < ActiveRecord::Base

  validates :name, :owner, presence: true
  validates :name, uniqueness: { scope: :user_id }

  belongs_to(
  :owner,
  class_name: "User",
  foreign_key: :user_id,
  primary_key: :id
  )

  has_many :taggings, dependent: :destroy, inverse_of: :tag

  has_many(
  :notes,
  through: :taggings,
  source: :note
  )
end

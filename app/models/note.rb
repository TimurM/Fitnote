class Note < ActiveRecord::Base
  validates :notebook_id, :title, :body,  presence: true

  belongs_to :notebook

  has_many(
    :taggings,
    class_name: "Tagging",
    foreign_key: :tag_id,
    primary_key: :id,
    dependent: :destroy
  )

  has_many(
  :tags,
  through: :tagging,
  source: :tag
  )

  has_one(
  :owner,
  through: :notebook,
  source: :owner
  )
end

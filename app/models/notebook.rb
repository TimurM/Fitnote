class Notebook < ActiveRecord::Base
  validates :name, :owner_id, presence: true

  has_many :notes

  belongs_to(
    :owner,
    class_name: 'User',
    foreign_key: :owner_id,
    primary_key: :id
  )
end

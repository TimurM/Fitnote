class Notebook < ActiveRecord::Base
  validates :name, presence: true

  belongs_to(
    :owner,
    class_name: 'User',
    foreign_key: :owner_id,
    primary_key: :id
  )
end

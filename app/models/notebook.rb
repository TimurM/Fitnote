class Notebook < ActiveRecord::Base
  before_destroy :ensure_not_last_notebook
  validates :name, :owner_id, presence: true

  has_many :notes

  belongs_to(
    :owner,
    class_name: 'User',
    foreign_key: :owner_id,
    primary_key: :id
  )

  has_many(
    :notes,
    class_name: 'Note',
    foreign_key: :notebook_id,
    primary_key: :id,
    dependent: :destroy
  )
  # def ensure_not_last_notebook
  #   if owner.notebooks.reload.length == 1
  #     return false
  #   end
  # end

end

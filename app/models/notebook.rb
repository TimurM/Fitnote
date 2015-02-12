class Notebook < ActiveRecord::Base
  validates :name, :owner_id, presence: true
  before_save :ensure_note

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

  def ensure_note
    if self.notes.empty?
      self.notes.new(:title => "Untitled", :body => "Start typing...")
    end
  end
end

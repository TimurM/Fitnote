class Note < ActiveRecord::Base
  validates :notebook_id, :title, :body,  presence: true

  belongs_to :notebook
end

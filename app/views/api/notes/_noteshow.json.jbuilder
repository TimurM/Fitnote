# json.notes notebook.notes do |note|
#   json.extract! note, :id, :title, :body, :created_at, :updated_at
#
# end

json.extract! note, :id, :title, :body, :notebook_id, :created_at, :updated_at

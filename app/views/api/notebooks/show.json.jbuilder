json.extract! @notebook, :id, :name, :created_at, :updated_at

#
json.notes @notebook.notes do |note|
  json.extract! note, :id, :title, :body, :created_at, :updated_at

end

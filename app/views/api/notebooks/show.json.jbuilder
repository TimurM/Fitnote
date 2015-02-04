# json.(@notebook, :id, :name, :created_at, :updated_at)
json.extract! @notebook, :id, :name, :created_at, :updated_at

  json.notes @notebook.notes.each do |note|
    json.partial! "api/notes/noteshow", note: note
  end

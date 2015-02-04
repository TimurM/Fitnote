json.array!(@notebooks) do |notebook|
  json.partial! "api/notebooks/notebookshow", notebook: notebook
end

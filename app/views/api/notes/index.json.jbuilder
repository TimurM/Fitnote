json.array!(@notes) do |note|
  json.partial! "api/notes/noteshow", note: note
end

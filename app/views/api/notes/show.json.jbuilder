json.extract! @note, :id, :title, :body, :notebook_id, :created_at, :updated_at

json.tags @note.tags.each do |tag|
  json.partial! "api/tags/tagshow", tag: tag
end

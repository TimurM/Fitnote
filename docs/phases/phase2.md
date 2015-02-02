# Phase 2: JSON API and First Backbone Views

## Rails
### Models

### Controllers
Api::NotebooksController (create, destroy, index, show)
Api::NotesController (create, destroy, show, update)

### Views
* notebooks/show.json.jbuilder

## Backbone
### Models
* Notebooks (parses nested `notes` association)
* Notes

### Collections
* Notebooks
* Notes

### Views
* NotebooksShow (composite view, contains NoteShow subviews)
* NoteShow

## Gems/Libraries

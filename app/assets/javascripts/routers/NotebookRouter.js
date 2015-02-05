Fitnote.Routers.NotebookRouter = Backbone.Router.extend({

  initialize: function() {
    Fitnote.notebooks = new Fitnote.Collections.Notebooks();

    this.$sidebar = $('#sidebar-notebooks'),
    this.$rootEl = $('#note-list-items'),
    this.$notedetail = $('#note-show-detail')
  },

  routes: {
    "" : "index",
    "notebooks/:id/notes/:note_id": 'noteShow',
    "notebooks/:id" : 'notebookShow'
  },

  index: function() {
    Fitnote.notebooks.fetch();
    var indexView = new Fitnote.Views.NotebooksIndex({
      collection: Fitnote.notebooks
    });
    this.$sidebar.html(indexView.render().$el);
  },

  notebookShow: function(id) {
    var notebook = Fitnote.notebooks.getOrFetch(id);

    var showView = new Fitnote.Views.NotebookShow({
      model: notebook
    });
    this._swapView(showView);
  },

  noteShow: function(id, note_id) {
    var notebook = Fitnote.notebooks.getOrFetch(id);
    var note = notebook.notes().get(note_id);
    var noteDetailShow = new Fitnote.Views.NoteShow({
      model: note
    });
    this.$notedetail.html(noteDetailShow.render().$el);
    return this;
  },

  _swapView: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }

  // _swapView: function (selector, view) {
  // this._currentViews {selector: currentView}
  // }
})

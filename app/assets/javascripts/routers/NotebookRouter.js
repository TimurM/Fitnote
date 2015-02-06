Fitnote.Routers.NotebookRouter = Backbone.Router.extend({

  initialize: function(callback) {
    Fitnote.notebooks = new Fitnote.Collections.Notebooks();
    this.currentNotebook = {};
    this._currentView = {};

    this.$sidebar = $('#sidebar-notebooks'),
    this.$rootEl = $('#note-list-items'),
    this.$notedetail = $('#note-show-detail')
  },

  routes: {
    "" : "index",
    "notebooks/:id/notes/:note_id": 'noteShow',
    "notebooks/new" : 'newNotebook',
    "notebooks/:id" : 'notebookShow',
    "notes/new" : 'newNote'
  },

  // added a callback in a case  user tries to navigate directly to a note
  index: function(notebook_id, callback) {
    Fitnote.notebooks.fetch({
      success: function() {
        if (callback) {
          callback();
        } else {
          var firstNotebook = Fitnote.notebooks.models[0];
          Backbone.history.navigate("/notebooks/" + firstNotebook.id, {trigger: true});
        }
      },
    });

    var indexView = new Fitnote.Views.NotebooksIndex({
      collection: Fitnote.notebooks
    });
    this._notebooks = Fitnote.notebooks;
    this.$sidebar.html(indexView.render().$el);
  },

  notebookShow: function(id, note_id, callback) {
    if (!this._notebooks) {
      this.index(id, this.notebookShow.bind(this, id, note_id, callback))
    } else {
        var notebook = Fitnote.notebooks.getOrFetch(id);
        this.currentNotebook = notebook,
          that = this;

        notebook.fetch({
          success: function() {
            if (callback) {
              callback();
            } else {
              var firstNote = notebook.notes().first();
              that.renderNoteDiv(firstNote, notebook);
            }
          },
        });

        var showView = new Fitnote.Views.NotebookShow({
          model: notebook
        });
        this._swapView(showView, '#note-list-items');
    }
  },

  renderNoteDiv: function(note, notebook) {
    if(note){
      Backbone.history.navigate("/notebooks/" + notebook.id + "/notes/" + note.id, {
        trigger: true
      });
    } else {
      that.newNote();
    }
  },

  noteShow: function(id, note_id) {
    if (!this._notebooks) {
        this.notebookShow(id, note_id, this.noteShow.bind(this, id, note_id))
    } else {
        var notebook = Fitnote.notebooks.getOrFetch(id);
        var note = notebook.notes().getOrFetch(note_id);

        var noteDetailShow = new Fitnote.Views.NoteShow({
          model: note
        });
        this._swapView(noteDetailShow, '#note-show-detail');
    }
  },

  newNotebook: function() {
    var newNoteBook = new Fitnote.Models.Notebook();

    var newForm = new Fitnote.Views.NotebookForm({
      model: newNoteBook,
      collection: this.currentNotebook
    });
    // this.$('#sidebar').html(newForm);
    this._swapView(newForm, '#new-notebook');
  },

  newNote: function() {
    var newNote = new Fitnote.Models.Note();
    newNote.set({notebook_id: this.currentNotebook.id});

    var formView = new Fitnote.Views.NoteForm({
      model: newNote,
      collection: this.currentNotebook.notes()
    });
    this._swapView(formView, '#note-show-detail');
  },

  _swapView: function (view, element) {
    this._currentView[element] && this._currentView[element].remove();
    this._currentView[element] = view;
    $(element).html(view.render().$el);
  }
})

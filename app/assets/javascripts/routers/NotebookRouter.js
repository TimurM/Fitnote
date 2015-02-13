Fitnote.Routers.NotebookRouter = Backbone.Router.extend({
  initialize: function(callback) {
    this.currentNotebook = {};
    this._currentView = {};
    this.$sidebar = $('.sidebar-sections');
    this.$rootEl = $('#note-list-items');
    this.$notedetail = $('#note-show-detail');
    this.index();
    // this.ensureViews();
  },

  routes: {
    "" : "index",
    '1' : 'landingPage',
    "notes/new" : 'newNote',
    "notes/:id": 'noteShow',
    // "notebooks/:id/notes/:note_id": 'noteShow',
    "notebooks/:id" : 'notebookShow',
    "search/:keyword": "search"
  },

  // added a callback in a case  user tries to navigate directly to a note
  index: function(notebook_id, callback) {
    Fitnote.notebooks.fetch({
      // success: function() {
      //   if (callback) {
      //     callback();
      //   } else {
      //     var firstNotebook = Fitnote.notebooks.models[0];
      //     Backbone.history.navigate("/notebooks/" + firstNotebook.id, {trigger: true});
      //   }
      // },
      success: function () {
        if (!this._currentView[".sidebar-sections"]) {
          var indexView = new Fitnote.Views.Index({
            collection: Fitnote.notebooks
          });
          this._notebooks = Fitnote.notebooks;
          this._swapView(indexView, ".sidebar-sections");
          this.ensureNotebookShow();
        }
      }.bind(this)
    });


    // this.$sidebar.html(indexView.render().$el);
  },

  ensureNotebookShow: function() {
    if (!this._currentView["#note-list-items"]) {
      this._notebook = this._notebooks.first();
      this.currentNotebook = this._notebook;

      this._notebook.fetch({
        success: this.ensureNoteShow.bind(this)
      });
      if(this._notebook){
          var NotesIndex = new Fitnote.Views.NotebookShow({
            model: this._notebook
          });
        this._swapView(NotesIndex, "#note-list-items");
      }
    }
  },

  ensureNoteShow: function(notebook) {

      if(notebook.models !== undefined){
        this._note = notebook.first();
      } else if(notebook !== undefined){
        this._note = notebook.notes().first();
      }else {

        if(!this._currentView["#note-show-detail"]) {
          this._note = this._notebook.notes().first();
        }
      }

      if(this._note) {
        var noteDetailShow = new Fitnote.Views.NoteDetails({
          model: this._note
        });
        this._swapView(noteDetailShow, '#note-show-detail');
      }
  },

  notebookShow: function(id) {
        this._notebook = Fitnote.notebooks.getOrFetch(id);
        this.currentNotebook = this._notebook,
          that = this;

        this._notebook.fetch({
          success: function() {
            that.ensureNoteShow(that._notebook);
          },
        });

        var showView = new Fitnote.Views.NotebookShow({
          model: this._notebook
        });

        this._swapView(showView, '#note-list-items');
  },

  noteShow: function(id) {
        var note = Fitnote.notes.getOrFetch(id);

        var noteDetailShow = new Fitnote.Views.NoteDetails({
          model: note
        });

        this._swapView(noteDetailShow, '#note-show-detail');
  },

  newNote: function() {
    var newNote = new Fitnote.Models.Note();

    var that = this;
    this.currentNotebook.fetch({
      success: function() {
        newNote.set({notebook_id: that.currentNotebook.id});

        var formView = new Fitnote.Views.NoteForm({
          model: newNote,
          collection: that.currentNotebook.notes()
        });
        that._swapView(formView, '#note-show-detail');
      }
    })


  },

  search: function (keyword) {
    var searchResults = new Fitnote.Collections.Notes();
    var that = this;
    searchResults.fetch({
      data: {
        query: keyword
      },
      success: function () {
        that.ensureNoteShow(searchResults);

      }
    });
    var searchNotesIndex = new Fitnote.Views.NotesIndex({
      collection: searchResults
    });
    this._swapView(searchNotesIndex, '#note-list-items');
  },


  _swapView: function (view, element) {
    this._currentView[element] && this._currentView[element].remove();
    this._currentView[element] = view;
    $(element).html(view.render().$el);
  }
})

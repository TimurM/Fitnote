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
    // "notes/:id": 'noteShow',
    "notebooks/:id/notes/:note_id": 'noteShow',
    "notebooks/:id" : 'notebookShow',
    "notes/new" : 'newNote',
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
      this._notebook.fetch({
        success: this.ensureNoteShow.bind(this)
      });
      if(this._notebook){
          var NotesIndex = new Fitnote.Views.NotebookShow({
            model: this._notebook
          });
        this._swapView(NotesIndex, "#note-list-items");
        // this.ensureNoteShow();
      }
    }
  },

  ensureNoteShow: function() {
    if(!this._currentView["#note-show-detail"]) {
      // debugger
      this._note = this._notebook.notes().first();
      if(this._note) {
          var noteDetailShow = new Fitnote.Views.NoteDetails({
            model: this._note
          });
        this._swapView(noteDetailShow, '#note-show-detail');
      }
    }
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

        // var noteDetailShow = new Fitnote.Views.NoteShow({
        //   model: note
        // });
        var noteDetailShow = new Fitnote.Views.NoteDetails({
          model: note
        });
        this._swapView(noteDetailShow, '#note-show-detail');
    }
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

  // renderNotesIndex: function (notes) {
  //   var searchResults = new Fitnote.Collections.Notes(notes);
  //   var searchNotesIndex = new Fitnote.Views.NotesIndex({
  //     collection: searchResults
  //   });
  //   this._swapView(searchNotesIndex, '#note-list-items');
  // },

  search: function (keyword) {
    var searchResults = new Fitnote.Collections.Notes();
    searchResults.fetch({
      data: {
        query: keyword
      },
      success: function () {
        // select first note from results collection
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

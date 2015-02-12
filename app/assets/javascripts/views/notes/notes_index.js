Fitnote.Views.NotesIndex = Backbone.CompositeView.extend({

  template: JST["static_pages/search_results"],

  events: {
    "click .note-heading" : 'renderNote'
  },

  initialize: function() {
    this.collection.each(this.addNote.bind(this));
    this.listenTo(this.collection, 'add', this.addNote);
    // this.listenTo(this.model, 'add change:title sync reset', this.render);
    // this.listenTo(this.collection, 'add change:title change:body sync reset', this.render);
  },

  render: function() {
    var content = this.template();
    this.$el.html(content);
    this.renderNotes();
    return this;
  },

  addNote: function(note) {
    var view = new Fitnote.Views.NoteIndexItem({
      model: note
    });
    this.addSubview('#notes-summary', view);
  },

  renderNotes: function() {
    // var that = this;
    this.collection.each(this.addNote.bind(this));
  },

  renderNote: function(event) {
    var $clickedNote = $(event.currentTarget);
    var noteId = $clickedNote.attr('data-note-id');

    Backbone.history.navigate("/notes/" + noteId, {trigger: true});
  }

})

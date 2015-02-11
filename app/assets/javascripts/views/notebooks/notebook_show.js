Fitnote.Views.NotebookShow = Backbone.CompositeView.extend({
  template: JST['notebooks/show'],

  events: {
    "click .note-heading" : 'renderNote'
  },

  initialize: function() {
    this.collection = this.searchResults || this.model.notes();
    this.listenTo(this.model, 'add change:title sync reset', this.render);
    this.listenTo(this.collection, 'add change:title change:body sync reset', this.render);
  },

  render: function() {
    var content = this.template({
      notebook: this.model
    });
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
    this.model.notes().each(this.addNote.bind(this));
  },

  renderNote: function(event) {
    var $clickedNote = $(event.currentTarget);
    var noteId = $clickedNote.attr('data-note-id');

    Backbone.history.navigate("/notebooks/" + this.model.id + "/notes/" + noteId, {trigger: true});
  }
});

_.extend(Fitnote.Views.NotebookShow.prototype);

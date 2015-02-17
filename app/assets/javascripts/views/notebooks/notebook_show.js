Fitnote.Views.NotebookShow = Backbone.CompositeView.extend({
  template: JST['notebooks/show'],

  events: {
    "click .note-heading" : 'renderNote',
    "click .notebook-heading" : "selectedNotebook"
  },

  initialize: function() {
    this.model.fetch();
    this.collection = this.model.notes();
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

    Backbone.history.navigate("/notes/" + noteId, {trigger: true});
  },

  selectedNotebook: function(event) {
    var $clickedNotebook = $(event.currentTarget);

    // $('.notebook-heading').removeClass('selected-notebook');
    $clickedNotebook.addClass('selected-notebook');

  }
});

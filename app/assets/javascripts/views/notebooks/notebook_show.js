Fitnote.Views.NotebookShow = Backbone.CompositeView.extend({
  template: JST['notebooks/show'],

  initialize: function() {
    this.collection = this.model.notes();
    this.listenTo(this.model, 'add sync reset', this.render);
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
    var view = new Fitnote.Views.NoteIndex({
      model: note
    });
    this.addSubview('#notes-summary', view);
  },

  renderNotes: function() {
    this.model.notes().each(this.addNote.bind(this));
  }
});

_.extend(Fitnote.Views.NotebookShow.prototype);

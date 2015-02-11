Fitnote.Views.TagsShow = Backbone.View.extend({
  template: JST['notebooks/show'],

  events: {
    "click .tag-heading" : "renderNote"
  },

  initialize: function() {
    this.collection = this.model.notes();
    this.listenTo(this.model, 'add change:title sync reset', this.render);
    this.listenTo(this.collection, 'add change:title change:body sync reset', this.render);
  },

  render: function() {
    var content = this.template({
      tag: this.model
    });
    this.$el.html(content);
    this.renderNotes();
    return this;
  },

  renderNote: function(event) {
    debugger
    var $clickedNote = $(event.currentTarget);
    var noteId = $clickedNote.attr('data-note-id');
    Backbone.history.navigate("/notebooks/" + this.model.id + "/notes/" + noteId, {trigger: true});
  }
})

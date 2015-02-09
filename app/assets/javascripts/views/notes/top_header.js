Fitnote.Views.NoteTopHeader = Backbone.View.extend({
  template: JST['notes/top_header'],

  initialize: function() {
    this.collection = this.model.tags();
    this.listenTo(this.model, "sync reset add", this.render);
  },

  render: function() {
    var noteContent = this.template({
      note: this.model
    })
    this.$el.html(noteContent);
    return this;
  }
})

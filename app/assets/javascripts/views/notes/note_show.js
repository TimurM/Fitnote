Fitnote.Views.NoteShow = Backbone.View.extend({
  template: JST['notes/note_show_detail'],

  render: function() {
    var noteContent = this.template({
      note: this.model
    })
    this.$el.html(noteContent);
    return this;
  }
})

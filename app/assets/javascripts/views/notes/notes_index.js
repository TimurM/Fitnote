Fitnote.Views.NoteIndex = Backbone.View.extend({
  template: JST['notes/show'],

  initialize: function() {

  },

  render: function() {
    var content = this.template({
      note: this.model
    });
    this.$el.html(content);
    return this;
  }
})

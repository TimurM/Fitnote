Fitnote.Views.NoteIndex = Backbone.View.extend({
  template: JST['notes/show'],
  tagName: 'li',

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

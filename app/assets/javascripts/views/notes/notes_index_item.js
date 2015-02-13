Fitnote.Views.NoteIndexItem = Backbone.View.extend({
  template: JST['notes/show'],

  initialize: function() {

  },

  events: {
    'click .note-heading' : 'selectNote'
  },

  render: function() {
    var content = this.template({
      note: this.model
    });
    this.$el.html(content);
    return this;
  },

  selectNote: function(event) {
    $('.note-heading').removeClass('selected-note');

    $(event.currentTarget).addClass('selected-note');
  }
})

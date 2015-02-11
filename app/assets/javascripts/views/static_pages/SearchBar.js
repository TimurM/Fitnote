Fitnote.Views.SearchBar = Backbone.View.extend({

  template: JST["static_pages/search_bar"],

  events: {
    "submit form" : 'search'
  },

  initialize: function() {

  },

  render: function() {
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  search: function(event) {
    event.preventDefault;
    var keyword = $(event.currentTarget).find('input').val();

    $.ajax({
      url: 'api/notes.json',
      type: 'Get',
      data: {
        query: keyword
      }, success: function(notes) {
        Fitnote.router.renderNotesIndex(notes);
      }
    });

  }
})

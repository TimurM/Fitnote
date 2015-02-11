Fitnote.Views.SearchBar = Backbone.View.extend({

  template: JST["static_pages/search_bar"],

  events: {
    "submit form" : 'search'
  },

  render: function() {
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  search: function(event) {
    var query = $(event.currentTarget).attr('name')
    debugger;
  }
})

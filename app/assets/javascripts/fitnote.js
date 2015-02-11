window.Fitnote = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Utils: {},
  initialize: function() {
    Fitnote.router = new Fitnote.Routers.NotebookRouter();

    Fitnote.notes = new Fitnote.Collections.Notes();

    var $header = $("#search-bar-header");
    var searchBarView = new Fitnote.Views.SearchBar();
    $header.append(searchBarView.render().$el);
    Backbone.history.start();
  }
};

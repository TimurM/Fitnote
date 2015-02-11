window.Fitnote = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Utils: {},
  initialize: function() {

    Fitnote.notebooks = new Fitnote.Collections.Notebooks();
    Fitnote.notes = new Fitnote.Collections.Notes();

    var $header = $("#search-bar-header");
    var searchBarView = new Fitnote.Views.SearchBar();
    $header.append(searchBarView.render().$el);
    
    Fitnote.router = new Fitnote.Routers.NotebookRouter();
    Backbone.history.start();
  }
};

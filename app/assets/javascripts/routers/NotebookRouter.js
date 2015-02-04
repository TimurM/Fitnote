Fitnote.Routers.NotebookRouter = Backbone.Router.extend({

  initialize: function() {
    Fitnote.notebooks = new Fitnote.Collections.Notebooks();

    this.$sidebar = $('#sidebar'),
    this.$rootEl = $('#main')
  },

  routes: {
    "" : "index",
    "notebooks/:id" : 'show'
  },

  index: function() {
    Fitnote.notebooks.fetch();
    var indexView = new Fitnote.Views.NotebooksIndex({
      collection: Fitnote.notebooks
    });
    this.$sidebar.html(indexView.render().$el);
  },

  show: function(id) {
    var notebook = Fitnote.notebooks.getOrFetch(id);

    var showView = new Fitnote.Views.NotebookShow({
      model: notebook
    });
    this._swapView(showView);
  },

  _swapView: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
})

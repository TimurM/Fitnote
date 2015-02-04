window.Fitnote = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Utils: {}, 
  initialize: function() {
    new Fitnote.Routers.NotebookRouter();

    Backbone.history.start();
  }
};

$(document).ready(function(){
  Fitnote.initialize();
});

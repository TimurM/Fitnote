Fitnote.Collections.Notebooks = Backbone.Collection.extend({
  model: Fitnote.Models.Notebook,
  url: "/api/notebooks",

  getOrFetch: function(id) {
    var notebook = this.get(id),
    notebooks = this;

    if(!notebook) {
      notebook = new Fitnote.Models.Notebook({ id: id });
      notebook.fetch({
        success: function() {
          notebooks.add(notebook);
        },
      });
    } else {
      notebook.fetch();
    }
    return notebook;
  }
})

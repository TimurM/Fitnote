Fitnote.Views.NotebooksIndex = Backbone.View.extend({
  template: JST['notebooks/index'],
  className: "sidebar-notebooks-item",

  initialize: function() {
    this.listenTo(this.collection, "sync reset add remove", this.render);
  },

  events: {
    "click .new-notebook": "newNotebook",
    "click .delete-notebook": "removeNotebook",
    "click .notebook-heading" : "renderNotebook"
  },

  newNotebook: function(event){
    event.preventDefault();
    var newNoteBook = new Fitnote.Models.Notebook();
    var $form = new Fitnote.Views.NotebookForm({
      model: newNoteBook,
      collection: Fitnote.notebooks
    });
    this.$el.append($form.render().$el);
  },

  removeNotebook: function(event){
    event.preventDefault();

    var notebookId = $(event.currentTarget).attr("data-id");

    var notebook = this.collection.get(notebookId);
    notebook.destroy();
  },

  render: function() {
    fail
    var content = this.template({
      notebooks: this.collection
    });

    this.$el.html(content);
    return this;
  },

  renderNotebook: function(event) {
    // $('.notebook-heading').removeClass('selected-notebook');
    var $clickedNotebook = $(event.currentTarget);
    $clickedNotebook.addClass('selected-notebook');
    var notebookId = $clickedNotebook.attr('data-notebook-id');
    Backbone.history.navigate("/notebooks/" + notebookId, {trigger: true});
  }
})

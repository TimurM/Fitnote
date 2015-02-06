Fitnote.Views.NotebooksIndex = Backbone.View.extend({
  template: JST['notebooks/index'],

  initialize: function() {
    this.listenTo(this.collection, "sync", this.render)
  },
  events: {
    "click .new-notebook": "newNotebook"
  },
  newNotebook: function(event){
    event.preventDefault();
    // var modal = JST["notebooks/form"]();
    var $form = new Fitnote.Views.NotebookForm();
    this.$el.append($form.render().$el);
    // this.$('#myModal').modal();
  },

  render: function() {
    var content = this.template({
      notebooks: this.collection
    });

    this.$el.html(content);
    return this;
  }
})

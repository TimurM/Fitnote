Fitnote.Views.NotebooksIndex = Backbone.View.extend({
  template: JST['notebooks/index'],

  initialize: function() {
    this.listenTo(this.collection, "sync", this.render)
  },

  render: function() {
    var content = this.template({
      notebooks: this.collection
    });

    this.$el.html(content);
    return this;
  }
})
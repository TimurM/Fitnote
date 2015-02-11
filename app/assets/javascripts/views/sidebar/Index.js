Fitnote.Views.Index = Backbone.CompositeView.extend({
  template: JST["sidebar/index"],

  initialize: function() {
    Fitnote.tags.fetch();
    this.listenTo(Fitnote.tags, "sync reset add remove", this.render);
    this.listenTo(this.collection, "sync reset add remove", this.render);
    this.addNotebooks(this.collection);
    this.addTags(Fitnote.tags);
  },

  render: function() {
    var content = this.template();
    this.$el.html(content);
    // this.renderNotebooks();
    // this.renderTags();
    this.attachSubviews();
    return this;
  },

  addNotebooks: function(notebooks) {
    var notebooks = new Fitnote.Views.NotebooksIndex({
      collection: notebooks
    });
    this.addSubview("#sidebar-notebooks", notebooks);
  },

  addTags: function(tags) {
    var tags = new Fitnote.Views.TagsIndex({
      collection: tags
    });
    this.addSubview("#sidebar-tags", tags);
  }
})

Fitnote.Views.Index = Backbone.CompositeView.extend({
  template: JST["sidebar/index"],

  initialize: function() {
    Fitnote.tags.fetch();
    this.addSearchBar();
    this.listenTo(Fitnote.tags, "sync reset add remove", this.render);
    this.listenTo(this.collection, "sync reset add remove", this.render);
  },

  render: function() {
    var content = this.template();
    this.$el.html(content);
    this.renderNotebooks();
    this.renderTags();

    // this.renderSearchBar();
    this.attachSubviews();
    return this;
  },

  addNotebooks: function(notebooks) {
    var notebooks = new Fitnote.Views.NotebooksIndex({
      collection: notebooks
    });
    this.addSubview("#sidebar-notebooks", notebooks);
  },

  renderNotebooks: function() {
    this.addNotebooks(this.collection);
  },

  addTags: function(tags) {
    var tags = new Fitnote.Views.TagsIndex({
      collection: tags
    });
    this.addSubview("#sidebar-tags", tags);
  },

  renderTags: function() {
    this.addTags(Fitnote.tags);
  },

  addSearchBar: function() {
    var searchBar = new Fitnote.Views.SearchBar();
    this.addSubview("#search-bar-header", searchBar);
  },

  renderSearchBar: function() {
    this.addSearchBar();
  }
})

Fitnote.Views.TagsIndex = Backbone.View.extend({
  template: JST['tags/index'],
  className: "sidebar-tags-item",

  initialize: function() {
    this.listenTo(this.collection, "sync reset add remove", this.render);
  },

  events: {
    "click .new-tags": "newTag",
    "click .delete-tag": "removeTag",
    "click .tag-click" : "renderNotes"
  },

  render: function() {
    var content = this.template({
      tags: this.collection
    });

    this.$el.html(content);
    return this;
  },

  newTag: function(event) {
    event.preventDefault();

    var newTag = new Fitnote.Models.Tag()
    var $form = new Fitnote.Views.TagForm({
      model: newTag,
      collection: Fitnote.tags
    });
    this.$el.append($form.render().$el);
  },

  removeTag: function(event) {
    event.preventDefault();

    var tagId = $(event.currentTarget).attr('data-id')
    var tag = this.collection.get(tagId);
    tag.destroy();
  },

  renderNotes: function(event) {
    event.preventDefault();
    var name = $(event.currentTarget).attr('name')

    Backbone.history.navigate('/search/' + name, { trigger: true });
  }

})

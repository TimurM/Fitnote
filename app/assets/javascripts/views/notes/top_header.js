Fitnote.Views.NoteTopHeader = Backbone.View.extend({
  template: JST['notes/top_header'],

  initialize: function() {
    Fitnote.tags.fetch();
    this.collection = this.model.tags();
    this.listenTo(Fitnote.tags, "sync reset add remove", this.render);
    this.listenTo(this.model, "sync reset add remove", this.render);
    this.listenTo(this.collection, 'sync reset add remove', this.render);
  },

  events: {
    "blur .header-new-tag > input" : "addTag",
    "click .header-remove-tag": "removeTag"
  },

  render: function() {
    console.log('trying to rendering tags');
    var noteContent = this.template({
      tags: this.collection
    })
    this.$el.html(noteContent);
    return this;
  },

  addTag: function(event) {
    var formInput = $(event.target).serializeJSON();

    var existing_tags = Fitnote.tags.where(formInput);

    var that = this;
    if(existing_tags.length === 0) {
      var newTag = new Fitnote.Models.Tag(formInput);
      newTag.save({note_id: this.model.id}, {
        success: function() {
          that.collection.add(newTag);
        },
      });
    }
    else {
      existing_tags[0].save({note_id: this.model.id}, {
          success: function() {
            that.collection.add(existing_tags[0]);
          },
      });
    }
  },

  removeTag: function(event) {
    var tagId = $(event.target).attr('data-id');
    var tag = this.collection.get(tagId);
    tag.destroy();
  }
})

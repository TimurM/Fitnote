Fitnote.Views.NoteTopHeader = Backbone.View.extend({
  template: JST['notes/top_header'],

  initialize: function() {
    this.collection = this.model.tags();
    this.listenTo(this.model, "sync reset add", this.render);
    this.listenTo(this.collection, 'sync reset add remove', this.render);
  },

  events: {
    "blur .new-tag > input" : "addTag"
  },

  render: function() {
    var noteContent = this.template({
      tags: this.collection
    })
    this.$el.html(noteContent);
    return this;
  },

  addTag: function(event) {
    var formInput = $(event.target).serializeJSON();

    var existing_tags = this.collection.where(formInput);
    debugger
    var that = this;
    if(existing_tags.length === 0) {
      var newTag = new Fitnote.Models.Tag(formInput);
      newTag.save({note_id: this.model.id}, {
        success: function() {
          that.collection.add(newTag);
        },
      });
    }
    // else {
    //   existing_tags.save({note_id: this.model.id}, {
    //     success: function() {
    //       that.collection.add(existing_tags);
    //     },
    //   });
    // }
  }
})

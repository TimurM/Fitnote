Fitnote.Views.NoteShow = Backbone.View.extend({
  template: JST['notes/form'],
  deleteTemplate: JST['notes/delete'],

  initialize: function() {
    this.listenTo(this.model, "sync reset add", this.render)
  },

  events: {
    'submit form' : 'update',
    'click .delete-note' : 'deleteConfirmation',
    'click .delete-button' : 'deleteNote'
  },

  render: function() {
    var noteContent = this.template({
      note: this.model
    })
    this.$el.html(noteContent);
    return this;
  },

  update: function(event) {
    event.preventDefault();

    var attrs = $(event.currentTarget).serializeJSON(),
    that = this;
    this.model.set(attrs);
    this.model.save({}, {
      success: function() {
        that.collection.add(that.model, { merge: true });
        Backbone.history.navigate("/notebooks/" + that.model.get('notebook_id') +
        "/notes/" + that.model.id, {trigger: true });
      },
      error: function (model, response) {
        debugger;
      }
    });
  },

  deleteConfirmation: function(event) {

    var content = this.deleteTemplate({});
    this.$el.html(content);
    this.$('#delete-note-modal').modal();
    return this;
  },

  deleteNote: function(event) {
    var that = this;
    var notebook_id = this.model.get('notebook_id')
    var deleteModel = function(){
        that.model.destroy();
        Backbone.history.navigate("/notebooks/" +
        notebook_id, {trigger: true });
    }
      this.$('#delete-note-modal').on('hidden.bs.modal', deleteModel);
      this.$('#delete-note-modal').modal('hide');
  }


})

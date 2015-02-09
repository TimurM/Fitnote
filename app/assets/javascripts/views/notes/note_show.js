Fitnote.Views.NoteShow = Backbone.View.extend({
  template: JST['notes/update_form'],

  initialize: function() {
    this.listenTo(this.model, "sync reset add", this.render);
  },

  events: {
    'submit form' : 'update',
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
  }

})

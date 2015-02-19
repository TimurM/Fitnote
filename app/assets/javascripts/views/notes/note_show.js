Fitnote.Views.NoteShow = Backbone.View.extend({
  template: JST['notes/update_form'],

  initialize: function() {
    // this.listenTo(this.model, "sync change reset add", this.render);
    this.listenTo(this.model, "change", this.render);
  },

  events: {
    'submit form' : 'update',
    'blur #note-title, #body' : 'update'
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
        Backbone.history.navigate("/notes/" + that.model.id, {trigger: true });
      },
      error: function (model, response) {

      }
    });
  }

})

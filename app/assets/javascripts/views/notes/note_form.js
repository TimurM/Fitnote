Fitnote.Views.NoteForm = Backbone.View.extend({
  template: JST['notes/form'],
  tagname: 'form',
  events: {
    'submit form': 'submit'
  },

  render: function() {
    var content = this.template({
      note: this.model
    });
    this.$el.html(content);
    return this;
  },

  submit: function(event) {
    event.preventDefault();

    var attrs = $(event.currentTarget).serializeJSON(),
      that = this;
      this.model.set(attrs);
      this.model.save({}, {
        success: function() {
          that.collection.add(that.model, { merge: true });
          Backbone.history.navigate("/notes/" + that.model.id, {trigger: true })
        },
        error: function (model, response) {
          debugger;
        }
      });
  }
})

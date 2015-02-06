Fitnote.Views.NotebookForm = Backbone.View.extend({

  template: JST["notebooks/form"],

  events: {
    'submit form' : 'submit'
  },

  render: function() {
    var content = this.template({
      notebook: this.model
    });
    this.$el.html(content);
    this.$('#myModal').modal();
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
        Backbone.history.navigate("/notebooks/" + that.model.get('notebook_id'), {
          trigger: true });
      },
      error: function (model, response) {
      }
    });
  }

});

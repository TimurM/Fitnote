Fitnote.Views.TagForm = Backbone.View.extend({
  template: JST["tags/form"],

  events: {
    'submit form' : 'submit'
  },

  render: function() {
    var content = this.template({
      notebook: this.model
    });
    this.$el.html(content);
    this.$('#tagModal').modal();
    return this;
  },

  submit: function(event) {
    event.preventDefault();
    var attrs = $(event.currentTarget).serializeJSON(),
    that = this;
    this.model.set(attrs);
    var saveModel = function(){
      that.model.save({}, {
        success: function() {
          that.collection.add(that.model, { merge: true });
          // Backbone.history.navigate("/notebooks/" + that.model.id, {
          //   trigger: true });
          },
          error: function (model, response) {
          }
        });
      }
      this.$('#tagModal').on('hidden.bs.modal', saveModel);
      this.$('#tagModal').modal('hide');
    }


})

Fitnote.Models.Note = Backbone.Model.extend({
  urlRoot: 'api/notes',

  tags: function() {
    if(!this._tags) {
      this._tags = new Fitnote.Collections.Tags(
        [], { note: this }
      )
    }
    return this._tags
  },

  parse: function(response) {
    if(response.tags) {
      this.tags().set(response.tags, { parse: true });
      delete response.tags;
    }
    return response;
  }
})

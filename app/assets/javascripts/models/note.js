Fitnote.Models.Note = Backbone.Model.extend({
  urlRoot: 'api/notes',

  taggings: function() {
    if(!this._taggings) {
      this._taggings = new Fitnote.Collections.Taggings(
        [], { note: this }
      )
    }
    return this._taggings
  },

  parse: function(response) {
    if(response.taggings) {
      this.taggings().set(resonse.taggings, { parse: true });
      delete response.taggings;
    }
    return response;
  }
})

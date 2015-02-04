Fitnote.Models.Notebook = Backbone.Model.extend({
  urlRoot: "api/notebooks",

  notes: function() {
    if (!this._notes) {
      this._notes = new Fitnote.Collections.Notes([], { notebook: this });
    }
    return this._notes;
  },

  parse: function(response) {
    if(response.notes) {
      this.notes().set(response.notes, { parse: true });
      delete response.notes;
    }

    return response;
  }
});

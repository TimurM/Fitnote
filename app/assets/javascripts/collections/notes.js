Fitnote.Collections.Notes = Backbone.Collection.extend({
  model: Fitnote.Models.Note,
  url: 'api/notes',

  // comparator: function(note) {
  //   return note.get("updated_at");
  // },

  comparator: function(note) {
    var date = new Date(note.get('created_at'));
    return -date.getTime()
  },

  getOrFetch: function(id) {
    var note = this.get(id),
      notes = this;

    if(!note) {
      note = new Fitnote.Models.Note({ id: id});
      note.fetch({
        success: function() {
          notes.add(note);
        },
      });
    } else {
      note.fetch();
    }
    return note;
  }
});

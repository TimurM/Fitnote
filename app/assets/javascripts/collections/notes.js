Fitnote.Collections.Notes = Backbone.Collection.extend({
  model: Fitnote.Models.Note,
  url: 'api/notes',

  getOrFetch: function() {
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

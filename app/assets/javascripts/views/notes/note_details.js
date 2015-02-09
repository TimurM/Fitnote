Fitnote.Views.NoteDetails = Backbone.CompositeView.extend({
  template: JST['notes/detail'],

  initialize: function() {
    this.listenTo(this.model, "sync reset add", this.render);
    this.listenTo(this.model, 'add change:title sync reset', this.render);
    // this.listenTo(this.collection, 'add change:title change:body sync reset', this.render);
  },

  render: function() {
    var form = this.template({
      note: this.model
    })
    this.$el.html(form);
    // setTimeout(this.renderNoteContent.bind(this));
    this.renderNoteContent();
    this.renderBottomHeader();
    this.renderTopHeader();
    return this;
  },

  addNoteContent: function(note) {
    var noteContent = new Fitnote.Views.NoteShow({
      model: note
    });

    this.addSubview(".note-form-content", noteContent);
  },

  renderNoteContent: function() {
    this.addNoteContent(this.model);
  },

  addTopHeader: function(note) {
    var noteHeader = new Fitnote.Views.NoteTopHeader({
      model: note
    });
    this.addSubview(".note-form-top", noteHeader);
  },

  renderTopHeader: function() {
    this.addTopHeader(this.model);
  },

  addBottomHeader: function(note) {
    var noteBottom = new Fitnote.Views.NoteBottomHeader({
      model: note
    });
    this.addSubview(".note-form-buttom", noteBottom);
  },

  renderBottomHeader: function() {
    this.addBottomHeader(this.model);
  }
})

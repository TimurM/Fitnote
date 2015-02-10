Fitnote.Collections.Tags = Backbone.Collection.extend({
  model: Fitnote.Models.Tag,
  url: "api/tags"
})

Fitnote.tags = new Fitnote.Collections.Tags(); 

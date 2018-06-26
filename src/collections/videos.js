var Videos = Backbone.Collection.extend({

  model: Video,
  
  //pass each youtube fake video into video model and add to videos collection
  
 initialize: function() {
    this.on('change', function () {
      this.sort();
    }, this);
  },

  comparator: 'title',

  sortByField: function(field) {
    this.comparator = field;
    this.sort();
  }
  

});

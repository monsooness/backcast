var Videos = Backbone.Collection.extend({

  model: Video,
  
  //pass each youtube fake video into video model and add to videos collection
  
  initialize: function(videos) {
    // if(videos) {
    //   for (let i = 0; i < videos.length; i++) {
    //     var videoListEntryView = new VideoListEntryView();
    //     videoListEntryView.model = this.model(videos[i]);
    //   }
    // }
  },

  // comparator: 'title',

  // sortByField: function(field) {
  //   this.comparator = field;
  //   this.sort();
  // }
  reset : function() {
    
  }
  

});

var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    // this.video = new Video(fakeVideoData[0])
    this.videos = new Videos();
    this.videoPlayerView = new VideoPlayerView();
    this.videoListView = new VideoListView();
    this.searchView = new SearchView();
    this.render();
    
    // this.videoPlayerView.render();
  },


  render: function() {
    this.$el.html(this.template());
    $('body').append(this.$el);
    return this;
  },

  template: templateURL('src/templates/app.html')

});

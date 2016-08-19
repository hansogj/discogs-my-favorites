var Discogs = require('disconnect').Client;

var user = new Discogs().user();


user.wantlist().getReleases('hansogj', 0, {page: 2, per_page: 2}, function(err, data){
  debugger;
  console.log(err, data);
});


user.collection().getReleases('hansogj', 0, {page: 2, per_page: 2}, function(err, data){
  console.log("collection", err, data);
});

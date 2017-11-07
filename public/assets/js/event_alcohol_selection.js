$(document).ready(function(){

$.get("/user/:id/events/:eventid/occasion").then(function(data){
  console.log("get route hit");
})

})
$(document).ready(function(){

$.get("/user/1/events/5/occasion").then(function(data){
  console.log("get route hit");
})

})
$( document ).ready(function() {

function getEvents(){
  $.get("/api/event", function(data){

  console.log(data);

  });
}

  // getEvents();


});
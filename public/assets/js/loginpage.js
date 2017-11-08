$( document ).ready(function() {
    
    var url="";


  $("body").on('click',"#modal-submit",function(event){
       event.preventDefault();

       var username = $("#username-modal").val().trim();

       var password = $("#password-modal").val().trim();

       if (username === "") {
        alert("Please fill out your username");   
      } else if (password === "") {
        alert("Please fill out your password");
      } else {
        var newUser = {
        "name": username,
        "googleID": password
       }

        $.post('/api/user',newUser).then(function(data){
        url = "user/" + data + "/events";
        window.location.href = url;
       })

      getEvents();

      }

  });


  $("body").on('click',"#modal-no",function(event){
       event.preventDefault();
       alert("You have to be at least 21 to use this app!")
  }); 
      
  function getEvents() {
    $.get("/user/:id/events", function(data) {});
  };

  $("body").on('change',"#event-dropdown",function(event) {
    var value = $(this).val();
    var eventName = $(this).find('option:selected').attr('id');
    var windowUrl = window.location.href;
    var url = windowUrl + "/" + value + "/occasion";

    window.location.href = url;

   $.get(url,function(data){
   })
    
  });

});

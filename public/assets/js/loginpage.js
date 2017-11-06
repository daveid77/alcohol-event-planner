$( document ).ready(function() {
    
    var url="";

  $("body").on('click',"#modal-submit",function(event){
       event.preventDefault();

       var username = $("#username-modal").val().trim();

       var password = $("#password-modal").val().trim();

       console.log(username);
       console.log(password);

       var newUser = {
        "username": username,
        "password": password
       }

       $.post('/api/user',newUser).then(function(data){
        url = "user/" + data + "/events";
        window.location.href = url;
       })

       console.log('Clicked');

      getEvents();

  });

  function getEvents() {
    $.get("/user/:id/events", function(data){

    console.log(data);
    });
  };

    $("body").on('change',"#exampleSelect1",function(event) {
      var value = $(this).val();
      console.log(value);
      // add get request. on routes grab val and params
    });
});

$( document ).ready(function() {
    
    var url="";

  $("body").on('click',"#modal-submit",function(event){
       event.preventDefault();

       var username = $("#username-modal").val().trim();

       var password = $("#password-modal").val().trim();

       console.log(username);
       console.log(password);

       if (username === "") {
        alert("Please fill out your username");   
      } else if (password === "") {
        alert("Please fill out your password");
         

      } else {

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

      }

  });




       // console.log(username);
       // console.log(password);
      


  function getEvents() {
    $.get("/user/:id/events", function(data) {

    console.log(data);
    });
  };

    $("body").on('change',"#event-dropdown",function(event) {
      var value = $(this).val();
      var eventName = $(this).find('option:selected').attr('id');
      console.log(value);
      console.log(eventName);

      console.log(window.location.href);
      var windowUrl = window.location.href;
      var url = windowUrl + "/" + value + "/alcohol";

      window.location.href = url;

     $.get("/user/:id/events/:id/alcohol",function(data){
      console.log("get route hit");
     })
      
    });
});

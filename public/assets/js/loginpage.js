$( document ).ready(function() {
    
  // $("#modal-submit").on("submit", function(event){

  //   event.preventDefault();

  //   console.log("submit button clicked")
  // });

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
        window.location.href = "user/" + data;
       })

       console.log('Clicked');
  });

});
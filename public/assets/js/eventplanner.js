// Wait to attach handlers until DOM loaded
$(function() {
  $('.change-devoured').on('click', function(event) {
    var id = $(this).data('id');

    var newDevourState = {
      devoured: true
    };

    // Send PUT request
    $.ajax('/api/burgers/' + id, {
      type: 'PUT',
      data: newDevourState
    }).then(
      function() {
        // Reload page for updated list
        location.reload();
      }
    );
  });

  $('.create-form').on('submit', function(event) {
    event.preventDefault();

    var newBurger = {
      name: $('#bur').val().trim(),
      devoured: 0
    };

    // Send POST request.
    $.ajax('/api/burgers', {
      type: 'POST',
      data: newBurger
    }).then(
      function() {
        // Reload page for updated list
        location.reload();
      }
    );
  });
});

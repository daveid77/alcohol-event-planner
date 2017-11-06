// Wait to attach handlers until DOM loaded
$(function() {

  $('.alcohol-selection-wrapper').on('click', function(event) {
    $(this).toggleClass('selected');
    var text = $(this).attr('title') == 'Select this' ? 'Unselect this' : 'Select this';
    $(this).attr('title', text);
      // console.log($(this).data('alcoholid'));

    if ($('.selected').length > 0) {
      $('#submit-selections').removeClass('disabled').prop('disabled', false);
    } else {
      $('#submit-selections').addClass('disabled').prop('disabled', true);
    }
  });


  $('#submit-selections').on('click', function(event) {

    var eventId = parseInt($('#event-name').data('eventid'));
      // console.log('eventId: ', eventId);

    var alcoholIds = [];
    $('.selected').each(function() {
      alcoholIds.push(parseInt($(this).data('alcoholid')));
    });
      // console.log('alcoholIds: ', alcoholIds);

    var newOccasion = [];

    for (var i = 0; i < alcoholIds.length; i++) {
      newOccasion.push(
        {
          eventId: eventId,
          alcoholId: alcoholIds[i]
        }
      );
    }

    // newOccasion = JSON.stringify(newOccasion);

      console.log('newOccasion: ', newOccasion);
    
    // Gets UserId from URL
    var url = window.location.href;
    var urlSplit = url.split('/');
    var userId = urlSplit[4];
    var postURL = '/api/user/' + userId + '/occasion/';

    $.post(postURL, newOccasion).then(function(returnData){
        console.log('returnData: ', returnData);
        console.log('JSON.stringify(returnData): ', JSON.stringify(returnData));
      // newURL = '/api/user/' + userId + '/occasion/' + returnData.id;
      //   console.log('newURL: ', newURL);
      // window.location.href = newURL;
      // location.reload();
    });

  });


  // two functions below may prove useful in this alcohol app
  // $('.change-devoured').on('click', function(event) {
  //   var id = $(this).data('id');

  //   var newDevourState = {
  //     devoured: true
  //   };

  //   // Send PUT request
  //   $.ajax('/api/burgers/' + id, {
  //     type: 'PUT',
  //     data: newDevourState
  //   }).then(
  //     function() {
  //       // Reload page for updated list
  //       location.reload();
  //     }
  //   );
  // });

  // $('#alchlists').on('submit', function(event) {
  //   event.preventDefault();

  //   var newList = {
  //     name: $('').val().trim(),
  //   };

  //   // Send POST request.
  //   $.ajax('/api/burgers', {
  //     type: 'POST',
  //     data: newList
  //   }).then(
  //     function() {
  //       // Reload page for updated list
  //       location.reload();
  //     }
  //   );
  // });

});

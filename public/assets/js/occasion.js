// Wait to attach handlers until DOM loaded
$(function() {
  
  $('.alcohol-selection-wrapper').on('click', function(event) {
    $(this).toggleClass('selected');
    var text = $(this).attr('title') == 'Select this' ? 'Unselect this' : 'Select this';
    $(this).attr('title', text);

    if ($('.selected').length > 0) {
      $('#submit-selections').removeClass('disabled').prop('disabled', false);
    } else {
      $('#submit-selections').addClass('disabled').prop('disabled', true);
    }
  });


  // Gets userId from current URL
  var url = window.location.href;
  var urlSplit = url.split('/');
  var userId = urlSplit[4];
  var eventId = urlSplit[6];
  var postURL = '/api/user/' + userId + '/event/' + eventId + '/occasion/';
  userId = parseInt(userId);
  eventId = parseInt(eventId);
  var eventName = $('#event-name').text();
    
  $('#submit-selections').on('click', function(event) {

    // Creates array of selected data attributes
    var alcoholIds = [];
    $('.selected').each(function() {
      alcoholIds.push(parseInt($(this).data('alcoholid')));
    });

    var newOccasion = [];

    for (var i = 0; i < alcoholIds.length; i++) {
      newOccasion.push(
        {
          // UserId: userId,
          name: eventName,
          alcoholId: alcoholIds[i]
        }
      );
    }

    newOccasion = JSON.stringify(newOccasion);

    $.ajax({
      method: "post",
      data: newOccasion,
      url: postURL,
      contentType: 'application/json'
    }).done(function(returnData){
      // /user/:id/events/:eventid/occasion/:occid
      newURL = '/api/user/' + userId + '/event/'+ eventId + '/occasion/' + returnData[0].OccasionId;
      window.location.href = newURL;
    });
  });
});

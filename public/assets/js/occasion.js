// Wait to attach handlers until DOM loaded
$(function() {


  console.log("occasion js Loaded");
  
  $('.alcohol-selection-wrapper').on('click', function(event) {
    $(this).toggleClass('selected');
    var text = $(this).attr('title') == 'Select this' ? 'Unselect this' : 'Select this';
    $(this).attr('title', text);
      console.log($(this).data('alcoholid'));

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
    console.log('userId: ', userId)
  var eventId = urlSplit[6];
    console.log('eventId: ', eventId)
  var postURL = '/api/user/' + userId + '/event/' + eventId + '/occasion/';
  userId = parseInt(userId);
  eventId = parseInt(eventId);
  var eventName = $('#event-name').text();
    console.log('eventName: ', eventName);
    
  $('#submit-selections').on('click', function(event) {

    // Creates array of selected data attributes
    var alcoholIds = [];
    $('.selected').each(function() {
      alcoholIds.push(parseInt($(this).data('alcoholid')));
    });
    console.log(alcoholIds);
    console.log(eventName);

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
      console.log('newOccasion: ', newOccasion);

    // console.log('newOccasion: ', JSON.stringify(newOccasion));

    $.ajax({
      method: "post",
      data: newOccasion,
      url: postURL,
      contentType: 'application/json'
    }).done(function(returnData){
        console.log('returnData: ', returnData);
        console.log('JSON.stringify(returnData): ', JSON.stringify(returnData));
        console.log('returnData.id: ' + returnData[0].OccasionId);
      // UNcomment newURL and window.location when next route is ready to roll 
      // /user/:id/events/:eventid/occasion/:occid
      newURL = '/api/user/' + userId + '/event/'+ eventId + '/occasion/' + returnData[0].OccasionId;
        console.log('newURL: ', newURL);
      window.location.href = newURL;
    });
  });
});

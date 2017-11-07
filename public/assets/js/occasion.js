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
    
    // Gets userId from current URL
    var url = window.location.href;
    var urlSplit = url.split('/');
    var userId = urlSplit[4];
    var postURL = '/api/user/' + userId + '/occasion/';
    userId = parseInt(userId);

    // Gets eventId from data attribute in view header
    var eventId = parseInt($('#event-name').data('eventid'));

    // Creates array of selected data attributes
    var alcoholIds = [];
    $('.selected').each(function() {
      alcoholIds.push(parseInt($(this).data('alcoholid')));
    });

    var newOccasion = [];

    for (var i = 0; i < alcoholIds.length; i++) {
      newOccasion.push(
        {
          UserId: userId,
          eventId: eventId,
          alcoholId: alcoholIds[i]
        }
      );
    }

    newOccasion = JSON.stringify(newOccasion);
      console.log('newOccasion: ', newOccasion);

    // newOccasion = JSON.stringify([
    //   {"UserId": "6", "eventId": "4", "alcoholId": "17"},
    //   {"UserId": "6", "eventId": "4", "alcoholId": "32"},
    //   {"UserId": "6", "eventId": "4", "alcoholId": "43"},
    //   {"UserId": "6", "eventId": "4", "alcoholId": "69"}
    // ]);

    // console.log('newOccasion: ', JSON.stringify(newOccasion));

    $.ajax({
      method: "post",
      data: newOccasion,
      url: postURL,
      contentType: 'application/json'
    }).done(function(returnData){
        console.log('returnData: ', returnData);
        console.log('JSON.stringify(returnData): ', JSON.stringify(returnData));
      // UNcomment newURL and window.location when next route is ready to roll 
      // --> /user/:id/events/:eventid/occasion/:occid
      // newURL = '/api/user/' + userId + '/occasion/' + returnData.id;
      //   console.log('newURL: ', newURL);
      // window.location.href = newURL;
    });

  });

});

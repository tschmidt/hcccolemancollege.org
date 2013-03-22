/* Author: Terry Schmidt

*/

var tabify = function () {
  if ($('#current-schedule').length > 0) {

    $('#current-schedule, #past-schedule').each(function () {
      var $this = $(this);
      var data = $this.find('iframe').contents().find("#contents").html();
      $this
        .append(data)
        .find('style')
          .remove()
          .end()
        .find('.loader')
          .remove()
          .end()
    });
  }
}

var slideshow = function () {
  if ($('#slideshow').length > 0) {
    $('#slideshow').content_player({
      dynamicArrows: false
    });
  }
}

slideshow();
$(function () {

  $('.content-buttons-right a ').on('click', function (event) {
    event.preventDefault();
    var $list = $('.content-buttons-right a');

    console.log($list);
    $list.each(function (i, element) {
      if (event.target !== $(element)[0]) {
        if ($(element).hasClass('active')) {
          $(element).removeClass('active');
        }
      }
    });

    $(this).addClass('active');

  })

});
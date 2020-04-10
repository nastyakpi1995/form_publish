$(function () {

  $('.menu-list li ').on('click', function (event) {
    var $list = $('.menu-list li ');

    $list.each(function (i, element) {
      if (event.target !== $(element)[0]) {
        if ($(element).hasClass('active')) {
          $(element).removeClass('active');
        }
      }
    });

    $(this).addClass('active');
    if ($('.header-center-back').hasClass('hide')) {
      $('.header-center-back').removeClass('hide');
    }
  });

  $("#my-programs-menu").click(function () {

    $('#gyms').hide(1);

    $('#my-programs').show(1).load('components/myProgram.html');

    $('#header-text').html('My Programs');
    $('.header-center-back').removeClass('hide');
  });


})


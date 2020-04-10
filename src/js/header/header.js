$(function () {
  //header
  $('.header-center-search-btn').click(function () {
    $('.header-center-search-form').removeClass('hide');
    $('.search-form').addClass('show');
  });

  $('.header-center-search-exit').click(function (event) {
    event.preventDefault();
    $('.search-form').addClass('hide-search');
    setTimeout(function () {
      $('.header-center-search-form').addClass('hide');
      $('.search-form').removeClass('show').removeClass('hide-search');
    }, 1200)
  });

  $('.user-logo').click(function () {
    $('.user-dropdown').toggleClass('hide');
  });

  //dropdown

  $(document).on('click.bs.dropdown.data-api', '.dropdown.keep-inside-clicks-open', function (e) {
    if (e.target.type == 'button') {
      e.stopPropagation();
    }
  });

  $('.dropdown-item').click(function () {
    $(this).toggleClass('dropdown-item__active');
  });

  $(document).mouseup(function (e) {

    var user = $('.header-user-profile');

    if (!user.is(e.target)
      && user.has(e.target).length === 0) {
      $('.user-dropdown').addClass("hide");
    }

  });

})

$(function() {

  $(document).on('click.bs.dropdown.data-api', '.dropdown.keep-inside-clicks-open',
    function (e) {
      if (e.target.type === 'button'){
        e.stopPropagation();
      }
    });

  $('.dropdown-item').click(function () {
    $(this).toggleClass('dropdown-item__active');
  });

})
$(function () {
  $('#user-phone').inputmask({"mask": "+9(999)99999999"});

  $('.select-box__current').click(function () {
    $('.select-box__list').toggleClass('active');
    $('.select-box__icon').toggleClass('active');
  });
});
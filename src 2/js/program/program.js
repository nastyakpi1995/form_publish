$(function () {
    $('#user-data').inputmask({"mask": `99/99/99, ${[' ']} 99:99`});

    $('.select-box__current').click(function () {
        $('.select-box__list').toggleClass('active');
        $('.select-box__icon').toggleClass('active');
    });
    $('.select-box-revert__current').click(function () {
        $('.select-box-revert__list-revert').toggleClass('active');
        $('.select-box-revert__icon-revert').toggleClass('active');
    });
});
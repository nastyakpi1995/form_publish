$(function () {
    $('.select-box_menu__current_menu').click(function () {
        $('.select-box_menu__list_menu').toggleClass('active');
        $('.select-box_menu__icon_menu').toggleClass('active');
        $('.general').toggleClass('active');
    });
});
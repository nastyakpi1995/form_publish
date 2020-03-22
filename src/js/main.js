$(function () {

    $('#header').load('components/header.html');
    $('#menu').load('components/menu.html');
    $('#gyms').load('components/program-general.html');
    $('#add-gym').hide(1);
    ///////////
    //menu

    $('.menu-list > li > .open-submenu').on('click', function () {
        $(this).addClass('active');
        var element = $(this).parents('li').children('ul');

        if (element.length > 0) {
            $(element).slideToggle(100);
            $('.header-center-back').toggleClass('hide');
        }
    });

    $('.menu-list > li > span').on('click', function () {
        var $list = $('.menu-list > li > span ');
        $list.each(function (i, element) {
            if ($(this).hasClass('active')) ;
            $(this).removeClass('active');
        });
        $(this).addClass('active');
        if ($('.header-center-back').hasClass('hide')) {
            $('.header-center-back').removeClass('hide');
        }
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
    //add gym
    $('#gyms').mouseup(function (e) {

        var addGymBtn = $('.add-gym-btn');

        if (addGymBtn.is(e.target)) {
            $('#add-gym').show(1).load('components/addGym.html');
            $('#header-text').html('New gym');
            $('.header-center-back').removeClass('hide');

            $('#gyms').hide(1);
        }
    });
});


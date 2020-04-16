$(function () {

    $('#header').load('components/header.html');
    $('#menu').load('components/menu.html');
    $('#gyms').load('components/gyms.html').hide(1);
    $('#add-gym').hide(1);
    $('#my-programs').hide(1);
    $('#add-program').load('components/gyms/gyms.html');
    ///////////


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


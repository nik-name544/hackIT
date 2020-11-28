$(function () {
    $('.main-page__content .tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.main-page__content').find('.tab-item').removeClass('active-tab').hide();
        $('.main-page__content .main-page__content-tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });

    // $('.content-tabs__table-top-input').on('click', function (e) {
    //     $('.content-tabs__table-top-input-wrapper').toggleClass('active')
    // })

    // $(this).on('click', function (e) {  
    // // $('.content-tabs__table-top-item1').on('click', function (e) {  
    //         $('.content-tabs__table-top-input-wrapper').toggleClass('active') 
    //     })
    // })

    // $(this).attr('data-check').on('click', function (e) {
    //     $('.content-tabs__table-top-input-wrapper').toggleClass('active')
    // })

    // $('.product-one__tabs .tab, .settings__tabs .tab').on('click', function (event) {
    //     var id = $(this).attr('data-id');
    //     $('.product-one__tabs, .settings__tabs').find('.tab-item').removeClass('active-tab').hide();
    //     $('.product-one__tabs .tabs, .settings__tabs .tab').find('.tab').removeClass('active');
    //     $(this).addClass('active');
    //     $('#' + id).addClass('active-tab').fadeIn();
    //     return false;
    // });

});
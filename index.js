
//HEADER BG COLOR CHANGE
var position = $(window).scrollTop();

// should start at 0

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > position) {
        $('.header').css('background-color', 'var( --primary-color)');

    } else {
        $('.header').css('background-color', 'transparent');
    }
    position = scroll;

});


function reloadPage(){
    $('.logo').css('margin-top','0px');
    $('.navList').css('margin-top','0px');
    $('.home-front-page-content-h1').css('margin-left','0px');
    $('.home-front-page-content-p').css('margin-left','0px');
    $('.home-front-page-content-btn').css('margin-left','0px');

}
setTimeout(reloadPage,2000);


  
if ($(window).width() < 769) {
    $('.fa-bars').click(() => {
        $('.navList').css("display", "flex");
        $('.logo').css("display", "none");
        $('.fa-minus').css({
            'display' :"block",
            'color' : "black"
        });
        $('.fa-bars').css("display", "none");
    })

    $('.fa-minus').click(() => {
        location.reload();
        $('.navList').css("display", "none");
        $('.logo').css("display", "flex");
        $('.fa-minus').css("display", "none");
        $('.fa-bars').css("display", "flex");
    })



}







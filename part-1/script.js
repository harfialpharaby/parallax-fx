$(window).scroll(function() {
    let wScroll = $(this).scrollTop();

    console.log(wScroll);
    
    $('h1').css({
        'transform' : 'translate(0px, '+ wScroll/2 +'px)'
    });
});
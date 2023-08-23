$(window).on('scroll', function(){
    if($(window).scrollTop()){
        $('#stickynavbar').css('background-color','rgb(27 20 38)');
        $('.menu > a').css('background-color','rgb(255 255 255 / 90%)');
    }else{
        $('#stickynavbar').css('background-color','');
        $('.menu > a').css('background-color','');
    }
});
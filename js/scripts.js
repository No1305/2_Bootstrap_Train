$(document).ready(function(){
    $('#slideshow').carousel({interval:2000});
    
    $('#carouselButton').click(function(){
        if($('#carouselButton').children('span').hasClass('fa-pause')){
            $('#slideshow').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        }else if($('#carouselButton').children('span').hasClass('fa-play')){
            $('#slideshow').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });
    
    // when click login link
    $('#loginClick').click(function(){
        // show login modal
        $('#loginModal').modal();
    });

    // when click reserve-table link
    $('#reserveClick').click(function(){
        // show reserve table
        $('#reserve-modal').modal();
    });

});
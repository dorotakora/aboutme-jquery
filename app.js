$(document).ready(function () {

    $('.meet-mee').on('click', function () {
        $('.prev').css('visibility', 'visible');
        $('.next').css('visibility', 'visible');
        var currentSlide = $('.active');
        var nextSlide = currentSlide.next();
        if(nextSlide.length ) {
            currentSlide.removeClass('active').css('z-index', -10);
            nextSlide.addClass('active').css('z-index', 10);
        }
    });

    $('.next').on('click', function(){
        var currentSlide = $('.active');
        var nextSlide = currentSlide.next();
        if(nextSlide.length ) {
            currentSlide.removeClass('active').css('z-index', -10);
            nextSlide.addClass('active').css('z-index', 10);
        }
    });

    $('.prev').on('click', function(){
        var currentSlide = $('.active');
        var prevSlide = currentSlide.prev();

        if(prevSlide.length) {
            currentSlide.removeClass('active').css('z-index', -10);
            prevSlide.addClass('active').css('z-index', 10);
        }
    });

});
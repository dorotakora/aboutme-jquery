$(document).ready(function () {



    $('.meet-mee').on('click', function () {
        $('.prev').css('visibility', 'visible');
        $('.next').css('visibility', 'visible');
        let currentSlide = $('.active');
        let nextSlide = currentSlide.next();
        if(nextSlide.length) {
            currentSlide.removeClass('active').css('z-index', -10);
            nextSlide.addClass('active').css('z-index', 10);
        }
    });

    $('.next').on('click', function(){
        let currentSlide = $('.active');
        let nextSlide = currentSlide.next();
        if(nextSlide.length ) {
            currentSlide.removeClass('active').css('z-index', -10);
            nextSlide.addClass('active').css('z-index', 10);
        }
    });

    $('.prev').on('click', function(){
        let currentSlide = $('.active');
        let prevSlide = currentSlide.prev();

        if(prevSlide.length) {
            currentSlide.removeClass('active').css('z-index', -10);
            prevSlide.addClass('active').css('z-index', 10);
        }
        if(prevSlide.hasClass('slide-1')) {
            $('.prev').css('visibility', 'hidden');
            $('.next').css('visibility', 'hidden');
        }
    });

});
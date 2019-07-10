$(document).ready(function () {

    // $('.p1-enter').on('click', function () {
    //     $('.prev').css('visibility', 'visible');
    //     $('.next').css('visibility', 'visible');
    //     let currentSlide = $('.active');
    //     let nextSlide = currentSlide.next();
    //     if(nextSlide.length) {
    //         currentSlide.removeClass('active').css('z-index', -10);
    //         nextSlide.addClass('active').css('z-index', 10);
    //     }
    // });
    //
    // $('.next').on('click', function(){
    //     let currentSlide = $('.active');
    //     let nextSlide = currentSlide.next();
    //     if(nextSlide.length ) {
    //         currentSlide.removeClass('active').css('z-index', -10);
    //         nextSlide.addClass('active').css('z-index', 10);
    //     }
    // });
    //
    // $('.prev').on('click', function(){
    //     let currentSlide = $('.active');
    //     let prevSlide = currentSlide.prev();
    //
    //     if(prevSlide.length) {
    //         currentSlide.removeClass('active').css('z-index', -10);
    //         prevSlide.addClass('active').css('z-index', 10);
    //     }
    //     if(prevSlide.hasClass('slide-1')) {
    //         $('.prev').css('visibility', 'hidden');
    //         $('.next').css('visibility', 'hidden');
    //     }
    // });
    var activepage = 0, // variable used to manage page visibility
        arrowtimeout = null; // variable used for timeout management

// At the beginning
    $(document).ready(function() {
        $(".arrow").hide(); // Hide navigation arrows
        $(".page").hide(); // Hide all pages
        $(".page").eq(activepage).show(); // Show page no.1
    });

// Click on "enter"
    $(".page1-enter").click(function() {
        activepage += 1; // Set variable value
        showNextPage(activepage); // Call "next page" function passing active page number
    });

// Click on arrow "next"
    $(".arrow-next").click(function() {
        activepage < 3 ? activepage += 1 : null; // Set variable number (pages are indexed 0-4!)
        showNextPage(activepage); // Call "next page" function passing active page number
    });

// Click on arrow "previous"
    $(".arrow-previous").click(function() {
        activepage -= 1 // Set variable value
        showPreviousPage(activepage); // Call "previous page" function passing active page number
    });

// Show next page
    function showNextPage(pagenumber) {
        $(".page").eq(pagenumber - 1).hide( "slide", { direction: "left"  }, 1000 ); // Slide out (hide) current page
        $(".page").eq(pagenumber).show( "slide", { direction: "right"  }, 1000 ); // Slide in (show) next page
        if ($(".arrow").is(":hidden")) { // If navigation arrows are hidden
            arrowtimeout = setTimeout(function() {
                $(".arrow").fadeIn(); // Show arrows after 1 second
                clearTimeout(arrowtimeout); // Clear timeout
            }, 1000);
        }
        if (activepage === 3) { // If the last page is active
            $(".arrow-next").fadeOut(); // Hide "next page" arrow
        }
    }

// Show previous page
    function showPreviousPage(pagenumber) {
        $(".page").eq(pagenumber + 1).hide( "slide", { direction: "right"  }, 1000 ); // Slide out (hide) current page
        $(".page").eq(pagenumber).show( "slide", { direction: "left"  }, 1000 ); // Slide in (show) previous page
        $(".arrow-next").fadeIn(); // Show again "next page" arrow
        pagenumber === 0 ? $(".arrow").fadeOut() : null;  // If the first page is active hide navigation arrows
    }

});
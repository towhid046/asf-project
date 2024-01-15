$(document).ready(function(){

    $('#slideshow-container').slick({
        dots: true,
        autoplay: true,
        
        prevArrow: `<button type="button" class="slick-prev"><<Previous></button>`,
        nextArrow: `<button type="button" class="slick-next">></button>`
    });
});
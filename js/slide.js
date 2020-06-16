$(()=>{
    $(".main__slide-container").slick({
            arrows: false,
            fade: true,
            dots:true,
            autoplay: true,
            pauseOnHover:false,
            autoplaySpeed: 4900,
            slidesToShow: 1,
            asNavFor: ".main-slide-dots",
            customPaging:  function(slider, i) { 
                console.log($(slider.$slides[i]).html());
                return '<button class="tab">' + '<span class="text">' + $(slider.$slides[i]).attr('data-dot') + '</span>' + '</button>';
            }
    })
    $(".main-slide-dots").slick({
        arrows: false,
        fade: true,
        dots:false,
        autoplay: true,
        autoplaySpeed: 4900,
        slidesToShow: 1,
        asNavFor: ".main__slide-container"
    });
})
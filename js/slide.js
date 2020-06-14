$(()=>{
    $(".main__slide-container").slick({
            arrows: false,
            fade: true,
            dots:true,
            autoplay: true,
            autoplaySpeed: 4900,
            slidesToShow: 1,
            asNavFor: ".main__slide-dots",
            customPaging:  function(slider, i) { 
                console.log($(slider.$slides[i]).html());
                return '<button class="tab">' + '<span class="text">' + $(slider.$slides[i]).attr('data-dot') + '</span>' + '</button>';
            }
    })
    $(".main__slide-dots").slick({
        arrows: false,
        fade: true,
        dots:false,
        autoplay: true,
        autoplaySpeed: 4900,
        slidesToShow: 1,
        asNavFor: ".main__slide-container"
        // customPaging:  function(slider, i) { 
        //     console.log($(slider.$slides[i]).html());
        //     return '<button class="tab">' + $(slider.$slides[i]).attr('data-dot') + '</button>';
        // }
    })  
})
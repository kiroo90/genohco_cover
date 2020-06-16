$(document).ready(()=>{
    const $header = $(".header");
    const $lineTop = $(".js-line-top");
    const $lineMid = $(".js-line-mid");
    const $lineBottom = $(".js-line-bottom");
    const $headerItem = $(".header-nav-gnb__item");
    const $itemLink = $(".header-nav-gnb-submenu__link");
    const $modalBtn = $(".js-modal-btn");
    const $moblieBtn = $(".js-moblie-btn");
    const $accordionBtn = $(".js-moblie-list-btn");

    $(window).scroll(()=>{
        const scroll = $header.offset().top;
        if(scroll > 10){
            $header.addClass("bg");
        } else {
            $header.removeClass("bg");
        }
    })

    // 모바일 네비 아이콘 애니메이션
    $moblieBtn.on('click', ()=>{
        $lineTop.toggleClass("on");
        $lineMid.toggleClass("on");
        $lineBottom.toggleClass("on");
    });

    // delay대응 transition 0.8s 를 넣어줄 클래스
    $headerItem.hover((e)=>{
        $(e.currentTarget).find($itemLink).toggleClass("on");
    });
    $modalBtn.on("click",()=>{
        $(".nav-snb").toggleClass("nav-snb--hide");
    });

    // 모바일 네비
    $moblieBtn.on("click",()=>{
        $(".nav-snb-container").toggleClass("nav-snb-container--right");
        $($accordionBtn).removeClass("active");
        $(".nav-snb__bg").toggleClass("active");
        $accordionBtn.next().slideUp(); //네비가 닫힐때 열려있던 메뉴 닫기
    });
    $accordionBtn.on("click", (e)=>{
        const $icon = $(".xi-plus");
        $(e.currentTarget).find($icon).toggleClass("none");
        $(e.currentTarget).next().slideToggle();
        $accordionBtn.not(e.currentTarget).next().slideUp();
        if ($(e.currentTarget).hasClass("active")) {
            $($accordionBtn).removeClass("active");
        } else {
            $($accordionBtn).removeClass("active");
            $(e.currentTarget).addClass("active");
        }
        if($(e.currentTarget).find($icon).hasClass("none")){
            $icon.removeClass("none");
            $(e.currentTarget).find($icon).addClass("none");
        }
    });

    // 웹화면에서 dot 마우스 오버 이동 효과
    if($(window).width() > 1200) {
        $('.slick-dots li').on('mouseover', (e) => {
            $(e.currentTarget).parents('.main__slide-container').slick('goTo', $(e.currentTarget).index());
        });
    }
});
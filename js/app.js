$(document).ready(()=>{
    const $lineTop = $(".js-line-top");
    const $lineMid = $(".js-line-mid");
    const $lineBottom = $(".js-line-bottom");
    const $headerItem = $(".header__nav-gnb__item");
    const $itemLink = $(".header__nav-gnb__submenu__link");
    const $modalBtn = $(".js-modal-btn");
    const $moblieBtn = $(".js-moblie-btn");
    const $accordionBtn = $(".js-moblie-list-btn");

    $moblieBtn.on('click', ()=>{
        $lineTop.toggleClass("on");
        $lineMid.toggleClass("on");
        $lineBottom.toggleClass("on");
    });
    $headerItem.hover((e)=>{
        $(e.currentTarget).find($itemLink).toggleClass("on");
    });
    $modalBtn.on("click",()=>{
        $(".nav-snb").toggleClass("nav-snb--hide");
    });
    $moblieBtn.on("click",()=>{
        $(".nav-snb-container").toggleClass("nav-snb-container--right");
        $($accordionBtn).removeClass("active");
        $(".nav-snb__bg").toggleClass("active");
        $accordionBtn.next().slideUp();
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
});
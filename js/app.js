$(document).ready(()=>{
    const $lineTop = $(".js-line-top");
    const $lineMid = $(".js-line-mid");
    const $lineBottom = $(".js-line-bottom");
    const $headerItem = $(".header__nav-gnb__item");
    const $itemLink = $(".header__nav-gnb__submenu__link");
    const $modalBtn = $(".js-modal-btn");

    $(".js-btn").on('click', ()=>{
        $lineTop.toggleClass("on");
        $lineMid.toggleClass("on");
        $lineBottom.toggleClass("on");
    });
    $headerItem.hover((e)=>{
        $(e.currentTarget).find($itemLink).toggleClass("on");
    });
    $modalBtn.on("click",()=>{
        $(".nav-modal").toggleClass("nav-modal--hide");
    })
})
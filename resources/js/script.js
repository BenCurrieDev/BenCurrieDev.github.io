
function clicked() {
    
    let header = document.getElementById("header");
    header.style.transition = "height 0.4s";
    header.style.height = "calc(var(--header-height) * 2)";

    let burger = document.getElementById("mobile-menu");
    burger.style.animation = "0.5s ease-in 0s forwards opacityDown";

    let close = document.getElementById("mobile-menu-open");
    close.style.display = "block";
    close.style.animation = "0.5s ease-in 0.5s forwards opacityUp";
    
    let menuExpanded = document.getElementById("mobile-menu-expanded");
    menuExpanded.style.display = "block";
    
    let mobileList = document.getElementById("mobile-nav-list");
    mobileList.style.display = "flex";
    
    let navs = document.querySelectorAll(".mobile-nav");
    navs.forEach((nav, i) => {
        nav.style.animation = "0.3s ease-in 0.4s forwards opacityUp";
    });
}

function unclicked() {
    let navs = document.querySelectorAll(".mobile-nav");
    navs.forEach((nav, i) => {
        nav.style.animation = "0.3s ease-in 0s forwards opacityDown";
    });

    let header = document.getElementById("header");
    header.style.transition = "height 0.4s 0.3s";
    header.style.height = "var(--header-height)";

    let close = document.getElementById("mobile-menu-open");
    close.style.animation = "0.5s ease-in 0s forwards opacityDown";
    close.style.display = "none";

    let burger = document.getElementById("mobile-menu");
    burger.style.animation = "0.5s ease-in 0s forwards opacityUp";



}
    


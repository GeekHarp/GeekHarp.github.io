const navBar = document.getElementById('nav');

window.onscroll = function toggleClass(){
    //Because of browser compatibility,let's use both method
    //Store 'scroll position'in a var
    let scrollPosY = window.pageYOffset | document.body.scrollTop;

    if (scrollPosY > 635) {
        navBar.classList.add(`scroll`)
    } else {
        navBar.classList.remove(`scroll`)
    }
}
let menu = document.querySelector('#menu-icon');
let Navbar = document.querySelector('.Navbar');
let navActive = document.querySelector('.Navbar').querySelectorAll('a');

$(document).ready(function() {
    $('.Navbar li a').click(function(event) {
        thisAttrHref = $(this).attr('href');
        thisAttrHrefOffset = $(thisAttrHref).offset().top;
        $('html,body').animate({scrollTop:thisAttrHrefOffset});
        event.preventDefault();
    });
});

$(window).scroll(function() {
    $('.rowin').each(function() {
        rowinTop = $(this).offset().top;
        if($(document).scrollTop() > rowinTop){
            activeOfs = $(this).attr('id');
            $('.rowin').removeClass('active');
            ActiveID = $(this).addClass('active').attr('id');
        }
    });
    $('.Navbar li').each(function(index,el) {
        thisChildren = $(this).children('a');
        thisChildrenHref = $(this).children('a').attr('href');
        if(thisChildrenHref === '#'+ActiveID){
            $('.Navbar li a').removeClass('active');
            $(thisChildren).addClass('active');
        }
    })
});

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    Navbar.classList.toggle('open');
}

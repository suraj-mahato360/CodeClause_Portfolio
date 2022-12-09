let menu = document.querySelector('#menu-icon');
let Navbar = document.querySelector('.Navbar');
let navActive = document.querySelector('.Navbar').querySelectorAll('a');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    Navbar.classList.toggle('open');
}

navActive.forEach(nactive => {
    nactive.addEventListener('click',function () {
        navActive.forEach(atv => atv.classList.remove('active'));
        this.classList.add('active');
    });
});
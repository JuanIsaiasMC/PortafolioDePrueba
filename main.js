const desableScroll = document.querySelector('body')
const navToogle = document.querySelector('.nav__toogle')
const navMenu = document.querySelector('.nav__menu')
const hideLinks = document.querySelectorAll('.nav__menu a[href^="#"]')
const closeMenu = document.querySelector('.ul__button')

navToogle.addEventListener('click', () => {
    navMenu.classList.toggle('nav__menu-visible')
    desableScroll.classList.toggle('scroll')
})


hideLinks.forEach(menuLink => {
    menuLink.addEventListener('click', function() {
        navMenu.classList.remove('nav__menu-visible')
        desableScroll.classList.remove('scroll')
    })
})


closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('nav__menu-visible')
    desableScroll.classList.remove('scroll')
})



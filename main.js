const desableScroll = document.querySelector('body')
const navToogle = document.querySelector('.nav__toogle')
const navMenu = document.querySelector('.nav__menu')
const hideLinks = document.querySelectorAll('.nav__menu a[href^="#"]')
const closeMenu = document.querySelector('.ul__button')

const proyectosContainer = document.querySelector('.proyectos__container')
const botonesProyectos = document.querySelectorAll('.botones')

navToogle.addEventListener('click', () => {
    navMenu.classList.toggle('nav__menu-visible')
    desableScroll.classList.toggle('scroll')
})


hideLinks.forEach(menuLink => {
    menuLink.addEventListener('click', function () {
        navMenu.classList.remove('nav__menu-visible')
        desableScroll.classList.remove('scroll')
    })
})


closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('nav__menu-visible')
    desableScroll.classList.remove('scroll')
})


botonesProyectos.forEach((boton, i) => {
    botonesProyectos[i].addEventListener('click', () => {
        let posicion = i
        let operacion = posicion * -20

        proyectosContainer.style.transform = `translateX(${operacion}%)`

        botonesProyectos.forEach((boton2, i) => {
            botonesProyectos[i].classList.remove('activo')
        })
        botonesProyectos[i].classList.add('activo')
    })
})




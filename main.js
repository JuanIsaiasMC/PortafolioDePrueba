// botones del menu mobile y solucion del scroll del body
const desableScroll = document.querySelector('body')
const navToogle = document.querySelector('.nav__toogle')
const navMenu = document.querySelector('.nav__menu')
const hideLinks = document.querySelectorAll('.nav__menu a[href^="#"]')
const closeMenu = document.querySelector('.ul__button')

// carrusel
const proyectosContainer = document.querySelector('.proyectos__container')
const botonesProyectos = document.querySelectorAll('.botones')

//  formulario 

const form = document.querySelector('.form')
const botonForm = document.querySelector('.form__submit')

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


// 768

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


form.addEventListener('submit', handleSubmit)

async function handleSubmit(e) {
    e.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'aplication/json'
        }
    })

    if (response.ok) {
        alert('Gracias por contactarme')
        location.reload()
    }
}



window.addEventListener("resize", function () {
    if (window.matchMedia("(min-width: 768px)").matches) {
        proyectosContainer.style.transform = `translateX(${-0}%)`
    }
})
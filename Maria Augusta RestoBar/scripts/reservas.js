// Header -- NavBar
const menuhamburguer = document.querySelector('.menuhamburguer')
const navmenu = document.querySelector('nav')

menuhamburguer.addEventListener('click', () => {
    menuhamburguer.classList.toggle('active')
    navmenu.classList.toggle('active')
    const corpo = document.body
    corpo.classList.toggle('overflowbody')
})
// Header -- NavBar

const popup = document.querySelector('.formulario form input[type=submit]')

function reservafeita (){
    window.confirm('Reserva efetuada com sucesso!')
}
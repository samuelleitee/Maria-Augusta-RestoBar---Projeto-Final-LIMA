// Janela modal -- Promoção
function abrirModalPromocao() {
    const modal = document.getElementById('janela-modal-festa-junina')
    const corpo = document.body
    corpo.classList.add('overflowbody')
    modal.classList.add('abrir')

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'fechar' || e.target.id == 'janela-modal-festa-junina'){
            modal.classList.remove('abrir')
            corpo.classList.remove('overflowbody')
        }
    })
}
// Janela modal -- Promoção

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

// Mais pedidos -- Carrossel de Imagens
const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".wrapper i");
let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;
const showHideIcons = () => {
    // Mostrando e escondendo icone de antes/depois de acordo com o scrollar à esquerda
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // Pegando a largura máxima de scroll
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}
arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // chamando showHideIcons depois de 60ms
    });
});
const autoSlide = () => {
    // if there is no image left to scroll then return from here
    if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;
    positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
    let firstImgWidth = firstImg.clientWidth + 14;
    // getting difference value that needs to add or reduce from carousel left to take middle img center
    let valDifference = firstImgWidth - positionDiff;
    if(carousel.scrollLeft > prevScrollLeft) { // Se o usuário scrollar para a direita
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    // Se o usuário scrollar para a esquerda
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}
const dragStart = (e) => {
    // updatating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}
const dragging = (e) => {
    // scrollando imgens/carrossel para a esquerda de acordo com o cursor do mouse
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}
const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");
    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);
// Mais pedidos -- Carrossel de Imagens
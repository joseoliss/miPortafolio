let menu = document.querySelector('.btn-menu');
let nav = document.getElementById('nav')
let cont = 1;


menu.addEventListener("click", () => {
    if (cont == 1) {
        nav.style.display = "none";
        cont = 0;
    } else {
        nav.style.display = "block";
        cont = 1;
    }
})


window.addEventListener('resize', () => {
    nav.style.display = "block";
})

window.addEventListener("scroll", () => {
    if (window.scrollY > 600) {
        nav.style.background = "#141E30";
        nav.style.transition = "800ms";
    } else {
        nav.style.background = "none";
    }
}); 
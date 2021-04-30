const menu = document.querySelector('.btn-menu');
const nav = document.getElementById('nav');

window.addEventListener('resize', () => {
    if (window.innerWidth < 800) {
        nav.style.background = "#141E30";
    } else {
        nav.style.background = "none";
    }
})

window.addEventListener('load', () => {
    if (window.innerWidth < 800) {
        nav.style.background = "#141E30";
    } else {
        nav.style.background = "none";
    }
})

menu.addEventListener('click', () => {
    document.querySelector('.nav').classList.toggle('show');
});

window.addEventListener("scroll", () => {
    if (window.innerWidth > 800) {
        if (window.scrollY > 600) {
            nav.style.background = "#141E30";
            nav.style.transition = "800ms";
        } else {
            nav.style.background = "none";
        }
    }

});

ScrollReveal().reveal('.principal', { delay: 250 });
ScrollReveal().reveal('.sobreMi', { delay: 250 });
ScrollReveal().reveal('.conocimientos', { delay: 250 });
ScrollReveal().reveal('.contacto', { delay: 250 });
ScrollReveal().reveal('.footer', { delay: 250 });
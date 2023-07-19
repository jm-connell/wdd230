const date = new Date();

/* last modified for */
let lastModified = document.lastModified;
document.querySelector('.last-modified').textContent = lastModified;

/* hamburger button nav toggle */
function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}
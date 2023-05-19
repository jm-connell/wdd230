const date = new Date();

function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

const fullDate = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(date);

document.querySelector('.headerDate').textContent = fullDate;

document.querySelector('.footerText').textContent = `© ${date.getFullYear()} Saginaw Chamber | Jon Connell | WDD 230 Project | Last Modification: ${document.lastModified}`;

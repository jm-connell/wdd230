const date = new Date();

/* toggle menu with hamburger menu */
function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

/* live date in header and footer */
const fullDate = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(date);
document.querySelector('.headerDate').textContent = fullDate;
document.querySelector('.footerText').textContent = `© ${date.getFullYear()} Saginaw Chamber | Jon Connell | WDD 230 Project | Last Modification: ${document.lastModified}`;

/* display meeting banner on mon/tue */
const day = date.getDay;
if (day == 1 || day == 2) {
    document.querySelector(".banner").classList.toggle("meeting");
}

/* toggle business view */
function toggleView() {
    document.querySelector('.business-cards').classList.toggle('list-businesses')
}

/* add datetime to join form */
function setDateTime() {
    document.querySelector('#datetime').value = date;
}
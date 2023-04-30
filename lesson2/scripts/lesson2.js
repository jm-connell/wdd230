const date = new Date();
document.querySelector('#footerText').textContent = `© ${date.getFullYear()} // Jon Connell // Last Updated: ${document.lastModified}`;
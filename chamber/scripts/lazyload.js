const images = document.querySelectorAll("img[data-src]");

function preloadImage(img) {
    // get data-src attribute to load img
    const src = img.getAttribute("data-src");

    // if there's no src, return
    if (!src) {
        return;
    }

    // set live image src to full-size image, overwriting placeholder
    img.src = src;
}


const imgOptions = {};

// watch for new intersection with images
const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            // if entry is not intersecting, return
            return;
        } else {
            // once image intersects, load it then unobserve
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
            console.log('image unobserved')
        }
    })
}, imgOptions);

images.forEach(image => {
    imgObserver.observe(image);
    console.log('new image observed')
})
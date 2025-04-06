document.addEventListener("DOMContentLoaded", () => {
    if (/Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor)) {
        const section = document.querySelectorAll("section") as NodeListOf<HTMLElement>;

        section.forEach(e => e.style.setProperty("transform", "translateZ(0)"));
        section.forEach(e => e.style.setProperty("will-change", "background-position"));
        section.forEach(e => e.style.setProperty("backface-visibility", "hidden"));
        section.forEach(e => e.style.setProperty("-webkit-transform", "translateZ(0)"));
        section.forEach(e => e.style.setProperty("-webkit-backface-visibility", "hidden"));
    }
});
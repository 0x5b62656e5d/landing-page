document.addEventListener("DOMContentLoaded", () => {
    const lazySections = document.querySelectorAll(".lazy-bg") as NodeListOf<HTMLElement>;

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target as HTMLElement;
                const background = target.dataset.bg;

                if (background) {
                    target.style.backgroundImage = `url(${background})`;
                    target.classList.add("loaded");
                    observer.unobserve(target);
                }
            }
        });
    });

    lazySections.forEach(section => {
        observer.observe(section);
    });
});

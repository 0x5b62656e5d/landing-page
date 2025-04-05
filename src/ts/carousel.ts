document.addEventListener("DOMContentLoaded", () => {
    setTimeout(loadCarousel, 200);
});

const loadCarousel = () => {
    const prev = document.querySelector("#prev") as HTMLElement;
    const next = document.querySelector("#next") as HTMLElement;

    const carousel = document.querySelector(".carousel") as HTMLElement;
    const carouselWrap = document.querySelector(".carousel-items") as HTMLElement;
    const carouselItem = document.querySelector(".carousel-item") as HTMLElement;
    const allCarouselItems = document.querySelectorAll(".carousel-item") as NodeListOf<HTMLElement>;

    let leftValue: number = 0;

    const carouselHeight = carousel.getBoundingClientRect().height;
    const prevHeight = prev.getBoundingClientRect().height;
    const nextHeight = next.getBoundingClientRect().height;

    const cardWidth: number = carouselItem.getBoundingClientRect().width;

    if (window.innerWidth < 500) {
        prev.style.top = carouselHeight + prevHeight / 2 + 4 + "px";
        next.style.top = carouselHeight + nextHeight / 2 + 4 + "px";
        prev.style.left = (carousel.getBoundingClientRect().width - cardWidth) / 2 + "px";
        next.style.right = (carousel.getBoundingClientRect().width - cardWidth) / 2 + "px";
    } else {
        prev.style.top = carouselHeight / 2 - prevHeight / 2 + "px";
        next.style.top = carouselHeight / 2 - nextHeight / 2 + "px";
    }

    prev.addEventListener("click", () => {
        if (leftValue !== 0) {
            leftValue -= -cardWidth;
            carouselWrap.style.transform = `translateX(${leftValue}px)`;
        }
    });

    next.addEventListener("click", () => {
        if (
            carouselWrap.getBoundingClientRect().width * (allCarouselItems.length - 1) >
            Math.abs(leftValue)
        ) {
            leftValue += -cardWidth;
            carouselWrap.style.transform = `translateX(${leftValue}px)`;
        }
    });

    //* Only for "Coming soon"
    allCarouselItems[allCarouselItems.length - 1].style.height = `${
        allCarouselItems[0].getBoundingClientRect().height
    }px`;
};

class Typewriter {
    private typewriterElement: Element;
    private displayedText: string = "";
    private period: number;
    private fullText: string;
    private isDeleting: boolean = false;

    constructor(typewriter: Element, text: string, period: string) {
        this.typewriterElement = typewriter;
        this.fullText = text;
        this.period = parseInt(period, 10);
        this.write();
    }

    private write() {
        if (this.isDeleting) {
            this.displayedText = this.fullText.substring(0, this.displayedText.length - 1);
        } else {
            this.displayedText = this.fullText.substring(0, this.displayedText.length + 1);
        }

        this.typewriterElement.textContent = this.displayedText;

        let delta = 150 - Math.random() * 100;

        if (this.isDeleting) {
            delta /= 2;
        }

        if (!this.isDeleting && this.displayedText === this.fullText) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.displayedText === "") {
            this.isDeleting = false;
            delta = 500;
        }

        setTimeout(() => {
            this.write();
        }, delta);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const typewriters = document.querySelectorAll(".typewriter");

    for (const typewriter of typewriters) {
        const text = typewriter.getAttribute("data-text");
        const period = typewriter.getAttribute("data-duration");

        if (text && period) {
            new Typewriter(typewriter, text, period);
        }
    }
});

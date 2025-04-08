class Typewriter {
    private typewriterElement: Element;
    private displayedText: string = "";
    private fullText: string;

    constructor(typewriter: Element, text: string) {
        this.typewriterElement = typewriter;
        this.fullText = text;
        this.write();
    }

    private write() {
        this.displayedText = this.fullText.substring(0, this.displayedText.length + 1);

        this.typewriterElement.textContent = this.displayedText;

        let delta = 150 - Math.random() * 100;

        if (this.displayedText !== this.fullText) {
            setTimeout(() => {
                this.write();
            }, delta + (this.displayedText.length === 1 ? 400 : 0));
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const typewriters = document.querySelectorAll(".typewriter");

    for (const typewriter of typewriters) {
        const text = typewriter.getAttribute("data-text");

        if (text) {
            new Typewriter(typewriter, text);
        }
    }
});

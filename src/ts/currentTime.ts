document.addEventListener("DOMContentLoaded", () => {
    const options = {
        timeZone: "Asia/Taipei",
        weekday: "long" as "long",
        month: "long" as "long",
        day: "numeric" as "numeric",
        hour: "numeric" as "numeric",
        minute: "numeric" as "numeric",
        hour12: false,
    };

    const formatter = new Intl.DateTimeFormat([], options);
    const currentTime = document.querySelector("#current-time") as HTMLElement;
    currentTime.textContent = `It is currently ${formatter.format(new Date())} for me.`;

    setInterval(() => {
        currentTime.textContent = `It is currently ${formatter.format(new Date())} for me.`;
    }, 60000);
});

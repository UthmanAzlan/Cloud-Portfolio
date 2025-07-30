document.addEventListener("DOMContentLoaded", function () {

    // 1️⃣ CONTACT VIA WHATSAPP
    const buttonMessage = document.getElementById("btnMessage");
    buttonMessage.replaceWith(buttonMessage.cloneNode(true));
    const newButtonMessage = document.getElementById("btnMessage");
    newButtonMessage.addEventListener("click", function () {
        window.open("https://wa.me/601117819457", "_blank"); 
    });

    // 2️⃣ CHANGE BACKGROUND COLOR (Updated Colors)
    const buttonColor = document.getElementById("btnColor");
    buttonColor.replaceWith(buttonColor.cloneNode(true));
    const newButtonColor = document.getElementById("btnColor");
    newButtonColor.addEventListener("click", function () {
        const colors = ["#40E0D0", "#0073e6", "#000000", "#1E3A5F", "#0F4C75"]; 
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = randomColor;
    });

    // 3️⃣ LIVE CLOCK
    function updateClock() {
        const clock = document.getElementById("clock");
        const now = new Date();
        clock.textContent = "Current Time: " + now.toLocaleTimeString();
    }
    setInterval(updateClock, 1000);
    updateClock();

    // 4️⃣ VISIT LINKEDIN
    const buttonLinkedIn = document.getElementById("btnLinkedIn");
    buttonLinkedIn.replaceWith(buttonLinkedIn.cloneNode(true));
    const newButtonLinkedIn = document.getElementById("btnLinkedIn");
    newButtonLinkedIn.addEventListener("click", function () {
        window.open("https://www.linkedin.com/in/uthmanazlan", "_blank");
    });
});

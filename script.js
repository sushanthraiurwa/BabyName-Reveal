document.addEventListener("DOMContentLoaded", () => {
    // Set the target date and time
    const targetDate = new Date("2025-01-07T18:59:50");
    const countdownContainer = document.getElementById("countdown");
    const nameRevealContainer = document.getElementById("name-reveal");
    const babyNameElement = document.getElementById("baby-name");
    const popper = document.getElementById("popper");

    // Update countdown every second
    const updateCountdown = () => {
        const now = new Date();
        const difference = targetDate - now;

        if (difference <= 0) {
            clearInterval(countdownInterval);
            revealName();
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days.toString().padStart(2, "0");
        document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
        document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
        document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
    };

    // Reveal the name with animation
    const revealName = () => {
        countdownContainer.classList.add("hidden");
                console.log("Revealing name...");
        countdownContainer.classList.add("hidden"); // Hide countdown
        nameRevealContainer.classList.add("show"); // Show name reveal
        babyNameElement.textContent = "Arya"; // Replace with the actual name
        triggerPopperAnimation();
    };

    // Trigger popper animation
    const triggerPopperAnimation = () => {
        popper.style.display = "block"; // Ensure visible
        popper.offsetHeight; // Trigger reflow to restart animation
        popper.style.animation = "pop 1s forwards"; // Apply animation
        console.log("Triggering popper animation...");
    };

    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown();
});

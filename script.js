document.addEventListener("DOMContentLoaded", () => {
    // Set the target date and time
    const targetDate = new Date("2025-01-19T17:00:00");
    const countdownContainer = document.getElementById("countdown");
    const nameRevealContainer = document.getElementById("name-reveal");
    const babyNameElement = document.getElementById("baby-name");
    const popper = document.getElementById("popper");

    // Function to update countdown
    const updateCountdown = () => {
        const now = new Date();
        const difference = targetDate - now;

        if (difference <= 0) {
            countdownContainer.remove(); // Remove countdown when time is up
            revealName(); // Countdown complete, reveal name immediately
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
        nameRevealContainer.classList.add("show"); // Show name reveal
        babyNameElement.textContent = "YUVIN M SHETTY"; // Replace with the actual name
        triggerPopperAnimation(); // Launch the popper animation
    };

    // Trigger popper animation
    const triggerPopperAnimation = () => {
        popper.style.display = "block"; // Ensure visible
        popper.style.animation = "none"; // Reset animation
        popper.offsetHeight; // Trigger reflow to restart animation
        popper.style.animation = "pop 1s forwards"; // Apply pop animation

        // Add confetti effect
        launchConfetti();
    };

    // Launch confetti animation
    const launchConfetti = () => {
        const confettiContainer = document.createElement("div");
        confettiContainer.id = "confetti-container";
        document.body.appendChild(confettiContainer);

        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement("div");
            confetti.className = "confetti";
            confetti.style.left = `${Math.random() * 100}%`;
            confetti.style.animationDelay = `${Math.random()}s`;
            confettiContainer.appendChild(confetti);
        }

        // Remove confetti after 5 seconds
        setTimeout(() => {
            confettiContainer.remove();
        }, 5000);
    };

    // Check if the countdown is already completed
    const now = new Date();
    if (now >= targetDate) {
        countdownContainer.remove(); // Remove countdown immediately
        revealName(); // Launch popper and reveal name
    } else {
        // Start countdown if the target date hasn't been reached
        const countdownInterval = setInterval(updateCountdown, 1000);
        updateCountdown();
    }

    // Carousel Functionality
    let slideIndex = 0;

    function moveSlide(n) {
        const slides = document.querySelectorAll('.carousel-item');
        slideIndex += n;
        if (slideIndex < 0) {
            slideIndex = slides.length - 1;
        } else if (slideIndex >= slides.length) {
            slideIndex = 0;
        }
        updateSlidePosition();
    }

    function updateSlidePosition() {
        const slides = document.querySelector('.carousel');
        const slideWidth = document.querySelector('.carousel-item').clientWidth;
        const margin = 20; // Margin for partial visibility
        slides.style.transform = `translateX(calc(${-slideIndex * (slideWidth + margin)}px + 10%))`;
    }

    // Attach event listeners for navigation buttons
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    if (prevButton && nextButton) {
        prevButton.addEventListener('click', () => moveSlide(-1));
        nextButton.addEventListener('click', () => moveSlide(1));
    }

    // Optional: Auto slide every 5 seconds
    setInterval(() => {
        moveSlide(1);
    }, 5000);
});

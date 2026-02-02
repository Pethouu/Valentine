const noButton = document.getElementById("no");
const yesButton = document.getElementById("yes");
const card = document.querySelector(".card");
const mainCard = document.getElementById("main-card");
const successCard = document.getElementById("success-card");

let x = 0;
let y = 0;

card.addEventListener("mousemove", (e) => {
    const rect = noButton.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = mouseX - centerX;
    const dy = mouseY - centerY;

    const distance = Math.sqrt(dx * dx + dy * dy);

    const safeDistance = 80;
    const moveStrength = 120;

    if (distance < safeDistance) {
        const angle = Math.atan2(dy, dx);
        x -= Math.cos(angle) * moveStrength;
        y -= Math.sin(angle) * moveStrength;

        const maxX = card.offsetWidth / 2 - noButton.offsetWidth;
        const maxY = card.offsetHeight / 2 - noButton.offsetHeight;

        x = Math.max(-maxX, Math.min(maxX, x));
        y = Math.max(-maxY, Math.min(maxY, y));

        noButton.style.transform = `translate(${x}px, ${y}px)`;
    }
});

function launchHearts() {
    for (let i = 0; i < 25; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.textContent = "♥";

        const x = Math.random() * window.innerWidth;
        const y = window.innerHeight - 50;

        heart.style.left = x + "px";
        heart.style.top = y + "px";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 2500);
    }
}


function launchFlowers() {
    for (let i = 0; i < 20; i++) {
        const flower = document.createElement("div");
        flower.classList.add("flower");

        for (let j = 0; j < 4; j++) {
            const petal = document.createElement("div");
            petal.classList.add("petal");
            flower.appendChild(petal);
        }

        const center = document.createElement("div");
        center.classList.add("center");
        flower.appendChild(center);

        flower.style.left = Math.random() * window.innerWidth + "px";
        flower.style.animationDuration = 2.5 + Math.random() * 1.5 + "s";

        document.body.appendChild(flower);

        setTimeout(() => {
            flower.remove();
        }, 4000);
    }
}
let heartInterval;
let flowerInterval;

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    const size = 20 + Math.random() * 20;
    heart.style.width = size + "px";
    heart.style.height = size + "px";

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.animationDuration = 4 + Math.random() * 3 + "s";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 8000);
}

function createFlower() {
    const flower = document.createElement("div");
    flower.classList.add("flower");

    for (let i = 0; i < 4; i++) {
        const petal = document.createElement("div");
        petal.classList.add("petal");
        flower.appendChild(petal);
    }

    const center = document.createElement("div");
    center.classList.add("center");
    flower.appendChild(center);

    flower.style.left = Math.random() * window.innerWidth + "px";
    flower.style.animationDuration = 5 + Math.random() * 3 + "s";

    document.body.appendChild(flower);

    setTimeout(() => flower.remove(), 9000);
}

yesButton.addEventListener("click", () => {
    mainCard.classList.add("hidden");
    successCard.classList.remove("hidden");

    heartInterval = setInterval(createHeart, 300);
    flowerInterval = setInterval(createFlower, 500);
});





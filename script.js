 
const surpriseBtn = document.getElementById("surpriseBtn");
const bigPopup = document.getElementById("bigPopup");
const closeBig = document.getElementById("closeBig");
 
function heartRain() {
    const heart = document.createElement("div");
    heart.classList.add("heart-fall");
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 20 + 20) + "px";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 3000);
}

 
surpriseBtn.addEventListener("click", () => {
    bigPopup.classList.add("active");

    
    let heartInterval = setInterval(heartRain, 80);
    setTimeout(() => clearInterval(heartInterval), 3000);
});

 
closeBig.addEventListener("click", () => {
    bigPopup.classList.remove("active");
});

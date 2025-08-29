// navbar heart counter
const heartCounter = document.querySelector("nav button span");
let count = 0;


const heartIcons = document.querySelectorAll(".fa-heart");

heartIcons.forEach(icon => {
  icon.addEventListener("click", () => {
    count++; 
    heartCounter.textContent = count;
  });
});


// copy btn
let copyCount = 0;

const copyBtns = document.querySelectorAll(".copyBtn")

copyBtns.forEach(button => {
    button.addEventListener("click", function(){
        const card = this.closest(".card");
        const phoneNumber = card.querySelector(".service-number").innerText;

        navigator.clipboard.writeText(phoneNumber).then(() => {
            alert(phoneNumber + " copied successfully");

            copyCount++;
            document.getElementById("copyCounter").innerText = copyCount;
        })
    })
})


// call btn
let coins = 100;
    const coinCountEl = document.getElementById("coinCount");
    const callBtns = document.querySelectorAll(".call-btn");
    const historyContainer = document.getElementById("historyContainer");
    const clearHistoryBtn = document.getElementById("clearHistory");

    callBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const card = btn.closest(".card");
            const serviceName = card.querySelector("h1.font-bold").textContent;
            const serviceNumber = card.querySelector(".service-number").textContent;

            // coin check
            if (coins < 20) {
                alert("Not enough coins! Need at least 20 coins to make a call.");
                return;
            }

            // deduct coin
            coins -= 20;
            coinCountEl.textContent = coins;

            // alert
            alert(` Calling ${serviceName} (${serviceNumber}) ...`);

            // local time
            const now = new Date();
            const time = now.toLocaleTimeString();

            // history section
            const historyDiv = document.createElement("div");
            historyDiv.className = "flex justify-between bg-gray-100 p-3 m-3 rounded-lg";
            historyDiv.innerHTML = `
                <div>
                    <h3 class="service-name font-bold">${serviceName}</h3>
                    <p class="service-number text-gray-600">${serviceNumber}</p>
                </div>
                <div class="pl-3">${time}</div>`;

          
            historyContainer.insertBefore(historyDiv, historyContainer.firstChild);
        });
    });

    // Clear button
    clearHistoryBtn.addEventListener("click", () => {
        historyContainer.innerHTML = "";
    });
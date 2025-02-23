function updateTime() {
    const now = new Date();
    document.getElementById("current-time").innerText = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    document.getElementById("current-date").innerText = now.toLocaleDateString(undefined, { month: "long", day: "numeric", year: "numeric" });
}

setInterval(updateTime, 60000);
window.onload = updateTime;

function completeTask(button) {
    button.disabled = true;
    button.classList.add("bg-gray-400", "cursor-not-allowed");
    let coinElement = document.getElementById("current-coins");
    let currentCoins = parseInt(coinElement.innerText);
    coinElement.innerText = currentCoins + 100;
}
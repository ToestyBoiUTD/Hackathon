function updateTime() {
    const now = new Date();
    console.log(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }))
    if (now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) === "08:14 AM") {
        console.log("changed");
        document.getElementById("pillsButton").disabled = false;
        document.getElementById("pillsButton").classList.remove("bg-gray-400", "cursor-not-allowed");
        document.getElementById("pillsButton").classList.add('bg-purple-500');

    }
    document.getElementById("current-time").innerText = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    document.getElementById("current-date").innerText = now.toLocaleDateString(undefined, { month: "long", day: "numeric", year: "numeric" });
}
function updateCoins() {
    let coinElement = document.getElementById("current-coins");
    let currentCoins = localStorage.getItem("coins");
    coinElement.innerText = currentCoins;

}

setInterval(updateTime, 60000);
window.onload = updateTime;
window.onload = updateCoins;

function completeTask(button) {
    button.disabled = true;
    button.classList.add("bg-gray-400", "cursor-not-allowed");
    button.classList.remove('bg-purple-500');
    let coinElement = document.getElementById("current-coins");
    let currentCoins = parseInt(coinElement.innerText);
    localStorage.setItem("coins", currentCoins + 100);
    coinElement.innerText = currentCoins + 100;

    // Loop through all items in localStorage
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i); // Get the key at index 'i'
    const value = localStorage.getItem(key); // Get the value for the key
    
    console.log(key + ': ' + value); // Print the key and value to the console
  }
  
}
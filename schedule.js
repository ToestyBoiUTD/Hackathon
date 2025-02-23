function updateTime() {
    const now = new Date();
    document.getElementById("current-time").innerText = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    document.getElementById("current-date").innerText = now.toLocaleDateString(undefined, { month: "long", day: "numeric", year: "numeric" });

    }
function updateCoins() {
    let coinElement = document.getElementById("current-coins");
    let currentCoins = localStorage.getItem("coins");
    if (currentCoins === null)
    {
        localStorage.setItem("coins", 100)
        currentCoins = localStorage.getItem("coins");
    }
    coinElement.innerText = currentCoins;

}
setInterval(updateTime, 1);
window.onload = updateCoins;
function completeTask(button) {
    updateTime;
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
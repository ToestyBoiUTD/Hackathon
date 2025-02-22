// Change the background color of the webpage
document.getElementById('changeColorBtn').addEventListener('click', function() {
    const colors = ['#FF6347', '#32CD32', '#FFD700', '#87CEEB', '#FF69B4'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});


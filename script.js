// Change the background color of the webpage
document.getElementById('changeColorBtn').addEventListener('click', function() {
    const colors = ['#FF6347', '#32CD32', '#FFD700', '#87CEEB', '#FF69B4'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});

// Toggle the visibility of text
document.getElementById('toggleTextBtn').addEventListener('click', function() {
    const dynamicText = document.getElementById('dynamicText');
    if (dynamicText.style.display === 'none') {
        dynamicText.style.display = 'block';
    } else {
        dynamicText.style.display = 'none';
    }
});

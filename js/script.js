// script.js
document.getElementById('changecolor').addEventListener('click', function() {
    const screenWidth = window.innerWidth;
    let colors;

    if (screenWidth >= 750) {
        // Large screens (desktops)
        colors = ['#FF5733', '#33FF57', '#3357FF'];
    } else if (screenWidth >= 500) {
        // Medium screens (tablets)
        colors = ['#FFC300', '#900C3F', '#581845',];
    } else {
        // Small screens (mobile devices)
        colors = ['#C70039', '#FF5733', '#900C3F'];
    }

    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});
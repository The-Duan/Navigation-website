setInterval(function () {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let clockTime = document.getElementById('time')
    clockTime.textContent = hours + ':' + minutes;
}, 1000)


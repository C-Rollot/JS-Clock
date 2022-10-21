//FONCTION D'AFFICHAGE DE L'HEURE
setInterval(function showDate() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    let time = document.getElementById("time");
    let timeContent = `${hours}: ${minutes}: ${seconds}`;
    time.innerHTML = timeContent;
}, 1000);

//FONCTION D'AFFICHAGE DE LA DATE
function showToday() {
    let date = new Date();
    let day = date.getUTCDate();
    let month = date.getMonth() + 1;
    let year = date.getUTCFullYear();
    let dateDiv = document.getElementById("date");
    dateDiv.innerHTML = `${day}/${month}/${year}`;
}

showToday();
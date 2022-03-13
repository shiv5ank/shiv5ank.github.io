const startingMinutes = 05;
let time = startingMinutes * 60;

const countdownT = document.getElementById('countdown');

setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds =seconds < 10 ? '0' + seconds : seconds;

    countdownT.innerHTML = `${minutes}: ${seconds}`;
    time--;
}
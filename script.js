console.log("Harshana");

let endTime;
let intervalId = null;

window.onload = () => {
    document.querySelector('#calculate').onclick = calculate;
    document.querySelector('#stop').onclick = stopTimer;
    document.querySelector('#reset').onclick = resetTimer;
}

function calculate() {
    const date = document.querySelector("#date1").value;
    const time = document.querySelector("#time1").value;

    if (date && time) {
        endTime = new Date(date + "T" + time);
        if (intervalId) clearInterval(intervalId);
        intervalId = setInterval(calculateTime, 1000);
    } else {
        alert("Please enter both date and time.");
    }
}

function calculateTime() {
    const currentTime = new Date();

    const days = document.querySelector('#countdown-days');
    const hours = document.querySelector('#countdown-hours');
    const minutes = document.querySelector('#countdown-minutes');
    const seconds = document.querySelector('#countdown-seconds');

    if (endTime > currentTime) {
        const timeLeft = (endTime - currentTime) / 1000;

        days.innerText = Math.floor(timeLeft / (24 * 60 * 60));
        hours.innerText = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
        minutes.innerText = Math.floor((timeLeft % (60 * 60)) / 60);
        seconds.innerText = Math.floor(timeLeft % 60);
    } else {
        days.innerText = 0;
        hours.innerText = 0;
        minutes.innerText = 0;
        seconds.innerText = 0;
    }
}

function stopTimer() {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
}

function resetTimer() {
    stopTimer();
    document.querySelector('#countdown-days').innerText = 0;
    document.querySelector('#countdown-hours').innerText = 0;
    document.querySelector('#countdown-minutes').innerText = 0;
    document.querySelector('#countdown-seconds').innerText = 0;
}


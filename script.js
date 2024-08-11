let hours = 0,
    minutes = 0,
    seconds = 0,
    centiseconds = 0,
    interval,
    isRunning = false;

function updateDisplay() {
    const display = document.getElementById("timerDisplay");
    display.innerText = 
        `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${centiseconds.toString().padStart(2, '0')}`;
}

function runTimer() {
    centiseconds++;
    if (centiseconds >= 100) {
        centiseconds = 0;
        seconds++;
    }
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes >= 60) {
        minutes = 0;
        hours++;
    }
    updateDisplay();
}

function startTimer() {
    if (!isRunning) {
        interval = setInterval(runTimer, 10);
        isRunning = true;
    }
}

function pauseTimer() {
    if (isRunning) {
        clearInterval(interval);
        isRunning = false;
    }
}

function resetTimer() {
    clearInterval(interval);
    hours = 0;
    minutes = 0;
    seconds = 0;
    centiseconds = 0;
    updateDisplay();
    isRunning = false;
    clearLaps();
}

function recordLap() {
    if (isRunning) {
        const lapTime = document.getElementById("timerDisplay").innerText;
        const lapList = document.getElementById("lapsList");
        const newLap = document.createElement("li");
        newLap.innerText = lapTime;
        lapList.appendChild(newLap);
    }
}

function clearLaps() {
    document.getElementById("lapsList").innerHTML = "";
}

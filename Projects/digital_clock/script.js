const clock = document.getElementById('clockog');
const timer = document.getElementById('timer');
const start = document.getElementById('start');
const reset = document.getElementById('reset');
const stop = document.getElementById('stop');
const audio = new Audio('tick-tock-95555.mp3');
function updateclock() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');
    clock.innerText = `${h}:${m}:${s}`;
}
setInterval(updateclock, 1000);
updateclock();

function format(totaltime) {
    const h = Math.floor(totaltime / 3600);
    const m = Math.floor((totaltime % 3600)/60);
    const s = (totaltime) % 60;
    
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}
let time = null;
let seconds = 0;
start.addEventListener('click', function () {
    audio.play(audio);
    if (time) return;
    time = setInterval(() => {
        seconds++;
        timer.innerText=format(seconds);
    }, 1000);
})
stop.addEventListener('click', function () {
    audio.play(audio);
    clearInterval(time);
    time = null;
})
reset.addEventListener('click', function () {
    audio.play(audio);
    clearInterval(time);
    time = null;
    seconds = 0;
    timer.innerText = "00:00:00";
    time = setInterval(() => {
        seconds++;
        timer.innerText=format(seconds);
    }, 1000);
})
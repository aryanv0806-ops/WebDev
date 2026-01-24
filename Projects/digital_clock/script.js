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
setInterval(updateclock, 1000 );
updateclock();

function format(totaltime) {
    const h = Math.floor(totaltime / 3600);
    const m = Math.floor((totaltime % 3600)/60);
    const s = (totaltime) % 60;
    
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}
let time = null;
let msCount = 0;

function format(totalMs) {
    let hrs = Math.floor(totalMs / 360000);
    let mins = Math.floor((totalMs % 360000) / 6000);
    let secs = Math.floor((totalMs % 6000) / 100);
    let ms = totalMs % 100;

    return (
        String(hrs).padStart(2, '0') + ":" +
        String(mins).padStart(2, '0') + ":" +
        String(secs).padStart(2, '0') + "." +
        String(ms).padStart(2, '0')
    );
}
function startTimer() {
    audio.play();
    if (time) return;
    time = setInterval(() => {
        msCount++;
        timer.innerText = format(msCount);
    }, 10);
}

start.addEventListener('click', startTimer);

window.addEventListener('keydown', function (event) {
    if (event.code === 'Space') {
        event.preventDefault(); 
        startTimer();
    }
});
stop.addEventListener('click', function () {
    audio.play();
    clearInterval(time);
    time = null;
})

reset.addEventListener('click', function () {
    audio.play();
    clearInterval(time);
    time = null;
    msCount = 0;
    timer.innerText = "00:00:00.00";
})
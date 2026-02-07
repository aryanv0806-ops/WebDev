const clock = document.getElementById('clockog');
function updateclock() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');
    clock.innerText = `${h}:${m}:${s}`;
}
setInterval(updateclock, 1000 );
updateclock();

 
const clock = document.getElementById('clockog');
function updateclock() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');
    clock.innerText = `${h}:${m}:${s}`;
}
setInterval(updateclock, 1000);
updateclock();

let subject = document.getElementById('subject');

function updateclass() {
    let today = new Date();
    console.log(today)
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const day = days[today.getDay()];
    const time = today.getHours();
    console.log(time);
    if (day === "Sun") {
        subject.textContent = "No Class Today";
    }
    else if (day === "Mon") {
        if (time >= 10 && time < 11) {
            subject.textContent = "Application Programming";
        }
        else if (time >= 11 && time < 12) {
            subject.textContent = "Introduction to Linear Algebra";
        }
        else if (time >= 12 && time < 13) {
            subject.textContent = "BREAK";
        }
        else if (time >= 13 && time < 14) {
            subject.textContent = "COMSK";
        }
        else if (time >= 15 && time < 17) {
            subject.textContent = "AP lab A1(Lab-1) and COMSK Lab(A2)";
        }
        else {
            subject.textContent = "NO Class RN";
        }
    }
    else if (day === "Tue") {
        if (time >= 10 && time < 11) {
            subject.textContent = "Data Structure";
        }
        else if (time >= 11 && time < 12) {
            subject.textContent = "Probability and Statistics";
        }
        else if (time >= 12 && time < 13) {
            subject.textContent = "BREAK";
        }
        else if (time >= 13 && time < 14) {
            subject.textContent = "Application Programming";
        }
        else if (time >= 15 && time < 17) {
            subject.textContent = "Data Structures(A2- LAB 3)";
        }
        else {
            subject.textContent = "NO Class RN";
        }
    }
    else if (day === "Wed") {
        if (time >= 10 && time < 11) {
            subject.textContent = "Introduciton to Linear Algebra";
        }
        else if (time >= 11 && time < 12) {
            subject.textContent = "Probability and Statistics";
        }
        else if (time >= 12 && time < 13) {
            subject.textContent = "BREAK";
        }
        else if (time >= 13 && time < 14) {
            subject.textContent = "Data Structures";
        }
        else if (time >= 15 && time < 17) {
            subject.textContent = "Data Structures Lab (A1 - LAB 6)IT Workshop(A2 - LAB 1))";
        }
        else {
            subject.textContent = "NO Class RN";
        }
    }
    else if (day === "Thu") {
        if (time >= 10 && time < 11) {
            subject.textContent = "Probability and Statistics";
        }
        else if (time >= 11 && time < 12) {
            subject.textContent = "Probability and Statistics";
        }
        else if (time >= 12 && time < 13) {
            subject.textContent = "BREAK";
        }
        else if (time >= 13 && time < 14) {
            subject.textContent = "Application Programming";
        }
        else if (time >= 14 && time < 15) {
            subject.textContent = "COMSK";
        }
        else if (time >= 15 && time < 17) {
            subject.textContent = "COMSK Lab A1";
        }
        else {
            subject.textContent = "NO Class RN";
        }
    }
    else if (day === "Fri") {
        if (time >= 10 && time < 11) {
            subject.textContent = "ILA Tute";
        }
        else if (time >= 11 && time < 12) {
            subject.textContent = "Introduction to Linear Algebra";
        }
        else if (time >= 12 && time < 13) {
            subject.textContent = "BREAK";
        }
        else if (time >= 13 && time < 14) {
            subject.textContent = "Data Structures";
        }
        else if (time >= 15 && time < 16) {
            subject.textContent = "Application Programming Lab (A2 - LAB 1) and IT Workshop A1(LAB 5";
        }

        else if (time >= 14 && time < 15) {
            subject.textContent = "IT Workshop A1(LAB 5)";
        }
        else if (time >= 16 && time < 17) {
            subject.textContent = "Application Programming Lab (A2 - LAB 1)";
        }

        else {
            subject.textContent = "NO Class RN";
        }
    }
    else if (day === "Sat") {
        subject.textContent = "NO Class Today"
    }
}
setInterval(updateclass, 6000);
let present = document.getElementById('present');
let absent = document.getElementById('absent');

present.addEventListener('click', function () {
    console.log("yup")

})
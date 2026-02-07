let audioelement = new Audio('Roses.mp3');
// audioelement.play()
let songidx = 0;
let masterplay = document.getElementById('masterplay');
let progressbar = document.getElementById('progressbar');
let gif = document.getElementById('gif');
let songs = [
    { songName: 'Roses', filePath: 'songs/1.mp3', coverPath: "cover/1.jpg" },
    { songName: 'Roses', filePath: 'songs/1.mp3', coverPath: "cover/1.jpg" },
    { songName: 'Roses', filePath: 'songs/1.mp3', coverPath: "cover/1.jpg" },
    { songName: 'Roses', filePath: 'songs/1.mp3', coverPath: "cover/1.jpg" },
    { songName: 'Roses', filePath: 'songs/1.mp3', coverPath: "cover/1.jpg" },
    { songName: 'Roses', filePath: 'songs/1.mp3', coverPath: "cover/1.jpg" },
    { songName: 'Roses', filePath: 'songs/1.mp3', coverPath: "cover/1.jpg" },
];

masterplay.addEventListener('click', () => {
    if (audioelement.paused || audioelement.currentTime <= 0) {
        audioelement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity = "1";
    }
    else {
        audioelement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity = "0";
    }
})
audioelement.addEventListener('timeupdate', function () {
    console.log("timeupdate");
    let progress = parseInt((audioelement.currentTime / audioelement.duration) * 100);
    console.log(progress);
    progressbar.value = progress;
});
progressbar.addEventListener('change', function(){
    audioelement.currentTime=(progressbar.value * audioelement.duration) / 100;
})


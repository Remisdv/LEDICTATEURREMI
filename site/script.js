// Remplacez 'YOUR_VIDEO_ID' par l'ID de votre vidéo YouTube
var videoID = 'O6L5wgTVtX8';

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '315',
        width: '560',
        videoId: videoID,
        playerVars: {
            autoplay: 1,
            controls: 1,
            loop: 1,
            rel: 0,
            showinfo: 0,
            modestbranding: 1,
            fs: 1
        },
        events: {
            'onReady': onPlayerReady,
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}
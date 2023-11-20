// Remplacez 'YOUR_VIDEO_ID_1' et 'YOUR_VIDEO_ID_2' par les IDs de vos vidéos YouTube
var videoID1 = 'O6L5wgTVtX8';
var videoID2 = 'X2BOu4vmc20';

var player1, player2;

function onYouTubeIframeAPIReady() {
    player1 = new YT.Player('player1', {
        height: '315',
        width: '560',
        videoId: videoID1,
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

    player2 = new YT.Player('player2', {
        height: '315',
        width: '560',
        videoId: videoID2,
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

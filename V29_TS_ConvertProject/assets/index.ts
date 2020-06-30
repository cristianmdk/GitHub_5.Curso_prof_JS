import MediaPlayer from './MediaPlayer'
import {MyVar} from './MediaPlayer.js' //to export a var i have to do it with the same name
import AutoPlay from './plugins/AutoPlay'
import AutoPause from './plugins/AutoPause'


const video = document.querySelector('video');
const player = new MediaPlayer({ 
    el: video,
    plugins: [
        new AutoPlay(),
        new AutoPause()
    ],
});


const playButton: HTMLElement = document.querySelector('#playButton');
playButton.onclick = () => player.togglePlay();

const muteButton: HTMLElement = document.querySelector('#muteButton');
muteButton.onclick = () => player.mute_unmute();

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
    console.log(error.message);
    });
}
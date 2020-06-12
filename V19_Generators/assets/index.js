import MediaPlayer from './MediaPlayer.js'
import {MyVar} from './MediaPlayer.js' //to export a var i have to do it with the same name
import AutoPlay from './plugins/AutoPlay.js'


const video = document.querySelector('video');
const player = new MediaPlayer({ 
    el: video,
    plugins: [
        new AutoPlay()
    ],
});

const button = document.querySelector('#playButton');
button.onclick = () => player.togglePlay(); 

const muteButton = document.querySelector('#muteButton');
muteButton.onclick = () => player.mute_unmute();
import MediaPlayer from './MediaPlayer.js';
//import {Autoplay} from  './plugins/Autoplay.js'; //the first plugin will sole the problem of autoplay

function Autoplay(){}
Autoplay.prototype.run = function(player){
    player.mute();
    player.play();
}






const video = document.querySelector('video');
const player = new MediaPlayer({ el: video , plugins: [new Autoplay()] });

const buttonPlay = document.querySelector('#playButton');
buttonPlay.onclick = () => player.togglePlay();

const buttonMute = document.querySelector('#muteButton');
buttonMute.onclick = () => player.mute_unmute();
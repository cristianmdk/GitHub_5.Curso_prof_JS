import MediaPlayer from './MediaPlayer.js'
import {MyVar} from './MediaPlayer.js' //to export a var i have to do it with the same name


const video = document.querySelector('video');
const player = new MediaPlayer({ el: video });

const button = document.querySelector('button');
button.onclick = () => player.togglePlay();
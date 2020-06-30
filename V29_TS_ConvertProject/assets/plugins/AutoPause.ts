import MediaPlayer from '../MediaPlayer';

class AutoPause {
    private threshold: number;
    player: MediaPlayer;

    constructor(){
        this.threshold = 0.25;
        this.handlerIntersection = this.handlerIntersection.bind(this)
        this.handlerVisibilityChange = this.handlerVisibilityChange.bind(this)
    }
    run (player){
        this.player = player;

        const config = { //object of configuration
            threshold: this.threshold,
        }
        const observer = new IntersectionObserver(this.handlerIntersection, config);
        observer.observe(this.player.media)

        document.addEventListener("visibilityChange", this.handlerVisibilityChange)
    }

    private handlerIntersection(entries: IntersectionObserverEntry[]){
        const entry = entries[0];
        console.log(entry);

        const isVisible = entry.intersectionRatio >= this.threshold

        if (isVisible){
            this.player.play();
        }else {
            this.player.pause();
        }
    }

    private handlerVisibilityChange(){
        const isVisible = document.visibilityState === "visible";
        if (isVisible){
            this.player.play();
        }else {
            this.player.pause();
        }
    }
}


// function AutoPause(){}

// AutoPause.prototype.run = function(player){
//     run (player);
// };

export default AutoPause;

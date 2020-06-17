class AutoPause {
    constructor(){
        this.threshold = 0.25;
        this.handlerIntersection = this.handlerIntersection.bind(this)
        this.handlerVisibilityChange = this.handlerVisibilityChange.bind(this)
    }
    run (player){
        this.player = player;

        const config = { //objeto de configuracion
            threshold: this.threshold,
        }
        const observer = new IntersectionObserver(this.handlerIntersection, config);
        observer.observe(this.player.media)

        document.addEventListener("visibilitychange", this.handlerVisibilityChange)
    }

    handlerIntersection(entries){
        const entry = entries[0];
        console.log(entry);

        const isVisible = entry.intersectionRatio >= this.threshold

        if (isVisible){
            this.player.play();
        }else {
            this.player.pause();
        }
    }

    handlerVisibilityChange(){
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

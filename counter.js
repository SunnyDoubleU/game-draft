class Start{
    constructor() {
            this.backToZero()
            this.removeStart()
            this.removeCups()
            this.game = new Game()
            this.player1 = new Player1()
            this.player2 = new Player2()
    }

    removeStart() {
        document.getElementsByClassName("startbox")[0].style.visibility = "hidden";
    }

    backToZero(){
        document.getElementById("winner").style.visibility = "hidden"
        document.getElementById("player1Score").innerHTML = "0"
        document.getElementById("player2Score").innerHTML = "0"
        document.getElementById("cuppa1").innerHTML = "0"
        document.getElementById("cuppa2").innerHTML = "0"
    }

    removeCups() {
        // var score1 = document.getElementsByClassName("score1")
        // var score2 = document.getElementsByClassName("score2")
        var img = document.getElementsByClassName("cupScore")
        var img2 = document.getElementsByClassName("cupScore2")

        for (let i = img.length; i > 0; i--) {
            img[0].remove()
        } 
        for (let i = img2.length; i > 0; i--) {
            img2[0].remove()
        }
    }
}

class Game {
    constructor() {
        this.getset()
        this.timeleft = 15
        this.checkWinner()
    }

    getset() {
        var fixThis = this

        var boba = [setInterval(function(){
            new Boba()
            if(fixThis.timeleft <= 3) clearInterval(boba)
        },700)]

        var boba2 = [setInterval(function(){
            new Boba2()
            if(fixThis.timeleft <= 3) clearInterval(boba2)
        },700)]

        var timer = setInterval(function(){
        fixThis.timeleft--;
        document.getElementById("counter").textContent = fixThis.timeleft;
        if(fixThis.timeleft <= 0) clearInterval(timer)
        },1000);

        var worm = [setInterval(function(){
            new Worm()
            if(fixThis.timeleft <= 3) clearInterval(worm)
        },2000)];

        var worm2 = [setInterval(function(){
            new Worm2()
            if(fixThis.timeleft <= 3) clearInterval(worm2)
        },2000)];
        
        // var wormWave = [setInterval(function(){
        //     if (fixThis.timeleft < 20) {
        //         new Worm()
        //     } 
        //     if (fixThis.timeleft <= 3) clearInterval(wormWave)
        // },2000)];

        // var wormWave2 = [setInterval(function(){
        //     if (fixThis.timeleft < 20) {
        //         new Worm2()
        //     }
        //     if (fixThis.timeleft <= 3) clearInterval(wormWave2)
        // },2000)];
        
    }

    checkWinner() {
        var fixThis = this
        // this.interValId = set
        var check = setInterval(function(){
            var player1 = document.getElementById("player1Score").innerHTML
            var player2 = document.getElementById("player2Score").innerHTML
            var winner = document.getElementById("winner")
            if(fixThis.timeleft === 0) {;
                if(parseFloat(player1) > parseFloat(player2)) {
                    winner.innerHTML = "Winner is Player 1!"
                    clearInterval(check)
                } else if (player1 === player2) {
                    winner.innerHTML = "Draw"
                    clearInterval(check)
                } else {
                    winner.innerHTML = "Winner is Player2!"
                    clearInterval(check)
                }
            document.getElementsByClassName("startbox")[0].style.visibility = "visible"
            winner.style.visibility = "visible"
            document.getElementsByTagName("ul")[0].style.visibility = "hidden"
            document.getElementById("start").innerHTML = "Restart"
            } 
        }, 1000)
    
    }

}

// function playSnail(){
//     var snail = document.getElementById("snail")
//     snail.play()
//     snail.volume = 0.1;
//     window.addEventListener("keydown", function(e){
//         switch(e.key) {
//             case("p"):
//             snail.play()
//             break;
//             case("o"):
//             snail.pause()
//             break;
//         }
//     })
// }

function playBubble() {
    var bubbleSound = document.getElementById("bubble")
    bubbleSound.play()
}

function playError() {
    var errorSound = document.getElementById("error")
    errorSound.play()
}

function playsScoreUp() {
    var scoreSound = document.getElementById("scoreUp")
    scoreSound.play()
}
// playSnail()

$(document).ready(function() {

    var start = document.getElementById("start")
    document.getElementById("winner").style.visibility = "hidden"
    var snail = document.getElementById("snail")
    snail.play()
    snail.volume = 0.1;
    start.addEventListener("click", function(){
        new Start()
    })
 });

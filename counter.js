class Start{
    constructor() {
        // var start = document.getElementById("start")
        // start.addEventListener("click", function(){
            this.game = new Game()
            this.player1 = new Player1()
            this.player2 = new Player2()
            this.removeStart()
            document.getElementById("winner").style.visibility = "hidden"
            document.getElementById("player1Score").innerHTML = "0"
            document.getElementById("player2Score").innerHTML = "0"
            this.removeCups()
        //   });
    }

    removeStart() {
        document.getElementsByClassName("startbox")[0].style.visibility = "hidden";
    }

    removeCups() {
        var score1 = document.getElementsByClassName("score1")
        var score2 = document.getElementsByClassName("score2")
        var img = document.getElementsByClassName("cupScore")

        for (let i = 0; i < score1.length; i++) {
            if (score1[0].contains(img[i])) {
                img[i].remove()
            }
        } 
        for (let i = 0; i < score2.length; i++) {
            if (score2[0].contains(img[i])) {
                img[i].remove()
            }
        }
    }
}

class Game {
    constructor() {
        this.getset()
        this.timeleft = 60
        this.checkWinner()
    }

    getset() {
        var fixThis = this

        var boba = [setInterval(function(){
            new Boba()
            if(fixThis.timeleft <= 5) clearInterval(boba)
        },1000)]

        var boba2 = [setInterval(function(){
            new Boba2()
            if(fixThis.timeleft <= 5) clearInterval(boba2)
        },1000)]

        var timer = setInterval(function(){
        fixThis.timeleft--;
        document.getElementById("counter").textContent = fixThis.timeleft;
        if(fixThis.timeleft <= 0)
            clearInterval(timer)
        },1000);

        var worm = [setInterval(function(){
            new Worm()
            if(fixThis.timeleft <= 5) clearInterval(worm)
        },3000)];

        var worm2 = [setInterval(function(){
            new Worm2()
            if(fixThis.timeleft <= 5) clearInterval(worm2)
        },3000)];
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
            document.getElementById("start").innerHTML = "Restart"
            } 
        }, 1000)
    
    }

}

$(document).ready(function() {
    var start = document.getElementById("start")
    document.getElementById("winner").style.visibility = "hidden"
    document.getElementsByClassName
    start.addEventListener("click", function(){
        new Start()
    })
 });



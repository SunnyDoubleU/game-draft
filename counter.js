class Start{
    constructor() {
        // var start = document.getElementById("start")
        // start.addEventListener("click", function(){
            this.game = new Game()
            this.player1 = new Player1()
            this.player2 = new Player2()
            this.removeStart()
            document.getElementById("winner").style.visibility = "hidden"
        //   });
    }

    removeStart() {
        document.getElementsByClassName("startbox")[0].style.visibility = "hidden";
    }
}

class Game {
    constructor() {
        this.getset()
        this.timeleft = 10
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
    }

    checkWinner() {
        var fixThis = this
        // this.interValId = set
        setInterval(function(){
            var player1 = document.getElementById("player1Score").innerHTML
            var player2 = document.getElementById("player2Score").innerHTML
            var winner = document.getElementById("winner")
            if(fixThis.timeleft === 0) {;
                if(parseFloat(player1) > parseFloat(player2)) {
                    winner.innerHTML = "Winner is Player 1!"
                } else if (player1 === player2) {
                    winner.innerHTML = "Draw"
                } else {
                    winner.innerHTML = "Winner is Player2!"
                }
            document.getElementsByClassName("startbox")[0].style.visibility = "visible"
            winner.style.visibility = "visible"
            } 
        }, 1000)
        
    }

}

$(document).ready(function() {
    var start = document.getElementById("start")
    document.getElementById("winner").style.visibility = "hidden"
    start.addEventListener("click", function(){
        new Start()
    })
 });



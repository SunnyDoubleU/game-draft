//PLAYER2
class Player2 {
    
    constructor() {
        this.cuppa = new Cuppa2()
        // this.boba = [setInterval(function(){
        //     new Boba2()}
        //     , 1000)]
        this.score = 0
        this.start()
        this.player2Score = 0
        this.name = name
    }

    start() {
        var fixThis = this
        setInterval(function() {
            if(fixThis.checkCollisionBoba()) {
            fixThis.score++
            fixThis.updateScore()
                if(fixThis.score === 5) {
                    fixThis.scoreToZero()
                    fixThis.player2Score++
                    fixThis.updatePlayer2Score()
                    fixThis.updateCups()
                }
            }
        }, 10)
    }

    updateScore() {
        document.getElementById("cuppa2").innerHTML = this.score
    }

    scoreToZero() {
        var fixThis = this
            fixThis.score = 0
            fixThis.updateScore()
    }

    updateCups() {
        var score1 = document.getElementsByClassName("score2")[0]
        var img = document.createElement("img")
        img.setAttribute("src", "./images/pearls.png")
        img.setAttribute("class", "cupScore")
        this.htmlRef = img
        score1.appendChild(this.htmlRef)
    }

    updatePlayer2Score() {
        document.getElementById("player2Score").innerHTML = this.player2Score
    }

    removeBoba(i) {
        var boba = document.getElementsByClassName("boba2")
        
        boba[i].remove()

        let newArray = Boba.bbs2.filter(function(el) {
            return el.htmlRef != boba[i]
        })
        Boba.bbs2 = newArray
    }

    checkCollisionBoba() {
        var boba = document.getElementsByClassName("boba2")
        var cuppa = this.cuppa;
        for (let i = 0; i < boba.length; i++) {
            if(isCollide(cuppa.htmlRef, boba[i])) {
                this.removeBoba(i)
                return true
            }
        }
        return false
    }
}

//Cuppa 2
class Cuppa2 {

    constructor() {
        this.htmlRef = document.getElementById("cup2")
        this.htmlRef.width = 100
        this.htmlRef.height = 160
        this.initiateControls()
    }

    initiateControls() {
        var cuppa = this.htmlRef
        window.addEventListener("keydown", function(e){
            switch(e.key) {
                case("ArrowRight"):
                    cuppa.style.left = `${cuppa.offsetLeft + 50}px`
                break;
                case("ArrowLeft"):
                    cuppa.style.left = `${cuppa.offsetLeft - 50}px`
                break;
            }
        })
    }
}

class Boba2 {
    
    constructor() {
        this.createNew()
        this.appearRandom()
        this.appearRandom = this.appearRandom.bind(this)
        this.checkCollisionBorder()
    }

    createNew() {
        var player1 = document.getElementsByClassName("player2")[0];
        var img = document.createElement("img");
        img.setAttribute("src", "./images/pearls.png")
        img.setAttribute("class", "boba2")
        this.htmlRef = img 
        player1.appendChild(this.htmlRef)
        Boba.bbs2.push(this)
    }
   
    appearRandom() {
        var boba = this.htmlRef
        var topNum = 0
        boba.style.display = "block"
        boba.style.position = "absolute"
        var leftPercentage = `${Math.random() * 90}%`
        boba.style.left = leftPercentage
        boba.style.top = setInterval(function() {
                topNum++
                boba.style.top = `${topNum}%`
        }, 50)
    }

    checkCollisionBorder() {
        var boba = document.getElementsByClassName("boba2")
        var fixThis = this
        setInterval(function() {
            for (let i = 0; i < boba.length; i++){
                if (boba[i].style.top > "930%"){
                    fixThis.removeBoba(i);
                }
            }
        }, 30)
    }

    removeBoba(i) {
        var boba = document.getElementsByClassName("boba2")
        boba[i].remove()

        let newArray = Boba.bbs2.filter(function(el) {
            return el.htmlRef != boba[i]
        })
        Boba.bbs2 = newArray
    }
}

Boba.bbs2 = []

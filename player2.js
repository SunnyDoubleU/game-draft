//PLAYER2
class Player2 {
    
    constructor() {
        this.cuppa = new Cuppa2()
        this.score = 0
        this.player2Score = 0
        if (this.score > 0 || this.player2Score > 0) {
            backToZero()
        }
        this.start()
        this.name = name
    }

    backToZero(){
        var zero = 0
        this.score = zero
        this.player2Score = zero
    }

    start() {
        var fixThis = this
        setInterval(function() {
            if(fixThis.checkCollisionBoba()) {
            fixThis.score++
            fixThis.updateScore()
            playBubble()
                if(fixThis.score === 5) {
                    playsScoreUp()
                    fixThis.scoreToZero()
                    fixThis.player2Score++
                    fixThis.updatePlayer2Score()
                    fixThis.updateCups()
                }
            }
        }, 1)

        setInterval(function() {
            if(fixThis.checkCollisionWorm()) {
                fixThis.scoreToZero()
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
        var score2 = document.getElementsByClassName("score2")[0]
        var img = document.createElement("img")
        img.setAttribute("src", "./styles/images/bubbleheart.png")
        img.setAttribute("class", "cupScore2")
        this.htmlRef = img
        score2.appendChild(this.htmlRef)
    }

    updatePlayer2Score() {
        document.getElementById("player2Score").innerHTML = this.player2Score
    }

    removeBoba(i) {
        var boba = document.getElementsByClassName("boba2")
        
        boba[i].remove()

        let newArray = Boba2.bbs2.filter(function(el) {
            return el.htmlRef != boba[i]
        })
        Boba2.bbs2 = newArray
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

    checkCollisionWorm() {
        var worm = document.getElementsByClassName("worm2")
        var cuppa = this.cuppa;
        for (let i = 0; i < worm.length; i++) {
            if(isCollide(cuppa.htmlRef, worm[i])) {
                this.removeWorm(i)
                playError()
                return true
            }
        }
        return false
    }

    removeWorm(i) {
        var worm = document.getElementsByClassName("worm2")
        
        worm[i].remove()

        let newArray = Worm2.ed.filter(function(el) {
            return el.htmlRef != worm[i]
        })
        Worm2.ed = newArray
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
                if(parseFloat(cuppa.offsetLeft) < 550){
                    cuppa.style.left = `${cuppa.offsetLeft + 50}px`
                }
                break;
                case("ArrowLeft"):
                if(parseFloat(cuppa.offsetLeft) > 30){
                    cuppa.style.left = `${cuppa.offsetLeft - 50}px`
                }
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
        img.setAttribute("src", "./styles/images/pearls.png")
        img.setAttribute("class", "boba2")
        this.htmlRef = img 
        player1.appendChild(this.htmlRef)
        Boba2.bbs2.push(this)
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
        }, 30)
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

        let newArray = Boba2.bbs2.filter(function(el) {
            return el.htmlRef != boba[i]
        })
        Boba2.bbs2 = newArray
    }
}

Boba2.bbs2 = []

class Worm2 {
    
    constructor() {
        this.createWorm()
        this.randomWorm()
        this.checkCollisionBorder()
    }

    createWorm() {
        var player2 = document.getElementsByClassName("player2")[0];
        var img = document.createElement("img");
        img.setAttribute("src", "./styles/images/worm.png")
        img.setAttribute("class", "worm2")
        this.htmlRef = img 
        player2.appendChild(this.htmlRef)
        Worm.ed.push(this)
    }

    randomWorm() {
        var worm = this.htmlRef
        var topNum = 0
        worm.style.display = "block"
        worm.style.position = "absolute"
        var leftPercentage = `${Math.random() * 90}%`
        worm.style.left = leftPercentage
        worm.style.top = setInterval(function() {
                topNum++
                worm.style.top = `${topNum}%`
        }, 20)
    }

    checkCollisionBorder() {
        var worm2 = document.getElementsByClassName("worm2")
        var fixThis = this
        setInterval(function() {
            for (let i = 0; i < worm2.length; i++){
                if (worm2[i].style.top > "930%"){
                    fixThis.removeWorm(i);
                }
            }
        }, 30)
    }

     removeWorm(i) {
        var worm2 = document.getElementsByClassName("worm2")
        worm2[i].remove()

        let newArray = Worm2.ed.filter(function(el) {
            return el.htmlRef != worm2[i]
        })
        Worm2.ed = newArray
    }
}

Worm2.ed = []


//PLAYER 1
class Player1 {
    
    constructor() {
        this.cuppa = new Cuppa()
        this.score = 0
        this.player1Score = 0
        if (this.score > 0 || this.player2Score > 0) {
            backToZero()
        }
        this.start()
    }

    backToZero(){
        var zero = 0
        this.score = zero
        this.player1Score = zero
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
                    fixThis.player1Score++
                    fixThis.updatePlayer1Score()
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
        document.getElementById("cuppa1").innerHTML = this.score
    }

    scoreToZero() {
        var fixThis = this
            fixThis.score = 0
            fixThis.updateScore()
    }

    updateCups() {
        var score1 = document.getElementsByClassName("score1")[0]
        var img = document.createElement("img")
        img.setAttribute("src", "./styles/images/bubbleheart.png")
        img.setAttribute("class", "cupScore")
        this.htmlRef = img
        score1.appendChild(this.htmlRef)
    }

    updatePlayer1Score() {
        document.getElementById("player1Score").innerHTML = this.player1Score
    }

    removeBoba(i) {
        var boba = document.getElementsByClassName("boba")
        
        boba[i].remove()

        let newArray = Boba.bbs.filter(function(el) {
            return el.htmlRef != boba[i]
        })
        Boba.bbs = newArray
        // Boba.bbs = document.getElementsByClassName("boba")
        
        // boba[i].style.display = "none"
    }

    checkCollisionBoba() {
        var boba = document.getElementsByClassName("boba")
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
        var worm = document.getElementsByClassName("worm")
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
        var worm = document.getElementsByClassName("worm")
        
        worm[i].remove()

        let newArray = Worm.ed.filter(function(el) {
            return el.htmlRef != worm[i]
        })
        Worm.ed = newArray
    }
}

//Cuppa 1
class Cuppa {

    constructor() {
        this.htmlRef = document.getElementById("cup1")
        this.htmlRef.width = 100
        this.htmlRef.height = 160
        this.initiateControls()
    }

    initiateControls() {
        var cuppa = this.htmlRef
        window.addEventListener("keydown", function(e){
            switch(e.key) {
                case("d"):
                if(parseFloat(cuppa.offsetLeft) < 550){
                    cuppa.style.left = `${cuppa.offsetLeft + 50}px`
                }
                break;
                case("a"):
                if(parseFloat(cuppa.offsetLeft) > 0){
                    cuppa.style.left = `${cuppa.offsetLeft - 50}px`
                }
                break;
            }
        })
    }
}

class Boba {
    
    constructor() {
        this.createNew()
        this.appearRandom()
        this.appearRandom = this.appearRandom.bind(this)
        this.checkCollisionBorder()
         
    }

    createNew() {
        var player1 = document.getElementsByClassName("player1")[0];
        var img = document.createElement("img");
        img.setAttribute("src", "./styles/images/pearls.png")
        img.setAttribute("class", "boba")
        this.htmlRef = img 
        player1.appendChild(this.htmlRef)
        Boba.bbs.push(this)
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
        var boba = document.getElementsByClassName("boba")
        var fixThis = this
        setInterval(function(){
            for (let i = 0; i < boba.length; i++){
                if (boba[i].style.top > "930%"){
                    fixThis.removeBoba(i);
                }
            }
        }, 30)
        
    }
    removeBoba(i) {
        var boba = document.getElementsByClassName("boba")
        boba[i].remove()

        let newArray = Boba.bbs.filter(function(el) {
            return el.htmlRef != boba[i]
        })
        Boba.bbs = newArray
    }
}

Boba.bbs = []

class Worm {
    
    constructor() {
        this.createWorm()
        this.randomWorm()
        this.checkCollisionBorder()
    }

    createWorm() {
        var player1 = document.getElementsByClassName("player1")[0];
        var img = document.createElement("img");
        img.setAttribute("src", "./styles/images/worm.png")
        img.setAttribute("class", "worm")
        this.htmlRef = img 
        player1.appendChild(this.htmlRef)
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
        var worm = document.getElementsByClassName("worm")
        var fixThis = this
        setInterval(function() {
            for (let i = 0; i < worm.length; i++){
                if (worm[i].style.top > "930%"){
                    fixThis.removeWorm(i);
                }
            }
        }, 30)
    }

     removeWorm(i) {
        var worm = document.getElementsByClassName("worm")
        worm[i].remove()

        let newArray = Worm.ed.filter(function(el) {
            return el.htmlRef != worm[i]
        })
        Worm.ed = newArray
    }
}

Worm.ed = []

function isCollide(element1, element2) {
    var a = {
        y: 100 - element1.offsetTop - element1.height, 
        x: element1.offsetLeft,
        height: element1.height,
        width: element1.width
    }
    var b = {
        y: 100 - element2.offsetTop - element2.height, 
        x: element2.offsetLeft,
        height: element2.height,
        width: element2.width
    }

    return !(
        ((a.y + a.height) < (b.y)) ||
        (a.y > (b.y + b.height)) ||
        ((a.x + a.width) < b.x) ||
        (a.x > (b.x + b.width))
    );
}




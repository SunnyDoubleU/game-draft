
//PLAYER 1
class Player1 {
    
    constructor() {
        this.cuppa = new Cuppa()
        // this.boba = [setInterval(function(){
        //     new Boba()}
        //     , 1000)]
        this.score = 0
        this.start()
        this.player1Score = 0
    }

    start() {
        var fixThis = this
        setInterval(function() {
            if(fixThis.checkCollisionBoba()) {
            fixThis.score++
            fixThis.updateScore()
                if(fixThis.score === 5) {
                    fixThis.scoreToZero()
                    fixThis.player1Score++
                    fixThis.updatePlayer1Score()
                    fixThis.updateCups()
                }
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
        img.setAttribute("src", "./images/pearls.png")
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
                    cuppa.style.left = `${cuppa.offsetLeft + 50}px`
                break;
                case("a"):
                    cuppa.style.left = `${cuppa.offsetLeft - 50}px`
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
        img.setAttribute("src", "./images/pearls.png")
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
        }, 50)
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
        
    }

    createWorm() {
        var player1 = document.getElementsByClassName("player1")[0];
        var img = document.createElement("img");
        img.setAttribute("src", "./images/worm.png")
        img.setAttribute("class", "worm")
        this.htmlRef = img 
        player1.appendChild(this.htmlRef)
        Worm.ed.push(this)
    }

    appearRandom() {
        var worm = this.htmlRef
        var topNum = 0
        worm.style.display = "block"
        worm.style.position = "absolute"
        var leftPercentage = `${Math.random() * 90}%`
        worm.style.left = leftPercentage
        worm.style.top = setInterval(function() {
                topNum++
                worm.style.top = `${topNum}%`
        }, 50)
    }

    checkCollisionBorder() {
        var worm = document.getElementsByClassName("worm")
        var fixThis = this
        setInterval(function() {
            for (let i = 0; i < worm.length; i++){
                if (worm[i].style.top > "930%"){
                    fixThis.removeBoba(i);
                }
            }
        }, 30)

     removeWorm(i) {
        var boba = document.getElementsByClassName("worm")
        worm[i].remove()

        let newArray = Worm.edfilter(function(el) {
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




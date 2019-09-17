//Variables 

var start = document.getElementById("start")

class Game {
    
    constructor() {
        this.cuppa = new Cuppa()
        this.boba = [setInterval(function(){
            new Boba()}
            , 2000)]
        this.score = 0
        this.start()
    }

    start() {
        var fixThis = this
        setInterval(function() {
            if(fixThis.checkCollisionBoba()) {
            fixThis.score++
            fixThis.updateScore()
        }  
        }, 10)
        // window.addEventListener("keydown", function() {
        //     if(fixThis.checkCollisionBoba()) {
        //         fixThis.score++
        //         fixThis.updateScore()
        //     }
        // })
    }
    
    updateScore() {
        document.getElementById("score").innerHTML = this.score
    }

    removeBoba(i) {
        var player1 = document.getElementById("player1")
        var boba = $("boba")
        boba[i].remove()
        // boba[i].style.display = "none"
    }

    checkCollisionBoba() {
        var boba = Boba.bbs;
        var cuppa = this.cuppa;
        for (let i = 0; i < boba.length; i++) {
            if(isCollide(cuppa.htmlRef, boba[i].htmlRef)) {
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
        this.htmlRef = document.getElementById("cuppa")
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



class Boba {
    
    constructor() {
        this.createNew()
        this.appearRandom()
        this.appearRandom = this.appearRandom.bind(this)
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
        var leftPercentage = `${Math.random() * 100}%`
        boba.style.left = leftPercentage
        boba.style.top = setInterval(function() {
                topNum++
                boba.style.top = `${topNum}%`
        }, 100)
    }
}

Boba.bbs = []




Boba.collision = function(boba) {
    var bbs = Boba.bbs
    debugger;
    for(let i = 0; i < bbs.length; i++) {
        if(isCollide(boba, bbs[i].htmlRef)&& boba !=bbs[i].htmlRef) return true
    }
}

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

new Game()
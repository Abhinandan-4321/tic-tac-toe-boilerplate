let boxElement = document.querySelectorAll(".box")


let xattempts = []
let Oattempts = []
let wonTheGame = 0;
let gameResult = document.getElementById("result")
let message = document.getElementById("message")

let winningCombinatons = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

let click = 0;
boxElement.forEach((box) =>{
    box.addEventListener("click", (event)=>{
        let i = event.target.getAttribute('Id')
        console.log(i-1)
        let p = document.createElement("p")
        // p.innerHTML = "X"
        p.setAttribute("id", "text")
        boxElement[i-1].append(p)
        
        if(click  % 2 == 0){
            p.innerText = 'X'
            xattempts.push(i-1)
            console.log(xattempts)
            result(winningCombinatons, xattempts, "x")
        }
        else{
            p.innerText = 'O'
            Oattempts.push(i-1)
            result(winningCombinatons, Oattempts, "O")
        }
        click++
        console.log(xattempts)
        console.log(Oattempts)
        if (click == 9 && wonTheGame == 0){
            gameResult.style.visibility = "visible"
            message.innerHTML = "It's a tie"
        }
    })
})



function result(winningCombinatons, attempts, playerName){
    let checker = [];
    let flag = 0;

for(let i=0;i<winningCombinatons.length;i++){
    if(Array.isArray(winningCombinatons[i])){
        result(winningCombinatons[i],attempts,playerName)
    }
    else{
        if(attempts.includes(winningCombinatons[i])){
            checker.push(true)
            flag++
            console.log(checker+" " +flag)
        }
        else{
            checker.push(false)
        }
    }
}
if(checker.every(check => check === true)&&flag>2){
    gameResult.style.visibility = "visible";
    message.innerHTML = "'"+ playerName + "'" + " Won the game!";
    wonTheGame=1;
    }

}
let again = document.querySelector("#button")
again.addEventListener("click",()=>{
    location.href = "./index.html"
})


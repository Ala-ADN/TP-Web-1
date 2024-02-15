function random(max){
    return Math.floor(1+Math.random()*(max-1))
}
let diffSelector = document.querySelector("#difficulty")
let range = document.querySelector(".range")
let input = document.querySelector("input")
let tries = document.querySelector(".tries")

var value

function start(){
    let s = diffSelector.getAttribute("selectedIndex")
    if(s==0){
        value = random(10)
        range.innerText = 1-10
        tries.innerText = 4
    }
    if(s==1){
        value = random(50)
        range.innerText = 1-50
        tries.innerText = 7
    }
    if(s==1){
        value = random(100)
        range.innerText = 1-100
        tries.innerText = 10
    }

}
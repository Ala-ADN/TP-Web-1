
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
const numGen = (diffIndex) => {
    let x;
    let tries;
    if (diffIndex === 0){
        x = 10;
        tries = 10;
    }
    else if (diffIndex === 1){
        x = 50;
        tries = 15;
    }
    else{
        x = 150;
        tries = 20;
    }
    return [getRandomInt(x),tries];
}

const selector = document.querySelector("#difficulty");
const btn = document.querySelector("#confirm");
const input = document.querySelector("#input");
const output = document.querySelector("#test");
const gen = document.querySelector(".again")
let diffIndex = 0;
let number = 0;
let tries = 10;
let value = 0;
let tes = false;
input.addEventListener("keypress",(e) =>
{
    if(tries&&(!tes)){
        if (e.key === "Enter") {
            value = e.target.value;
            if(value>number){
                tries-= 1;
                output.textContent = tries;
                alert("target is smaller");
            }
            else if(value<number){
                tries-= 1;
                output.textContent = tries;
                alert("target is bigger");
            }
            else{
                alert("you have won");
                tes = true;
            }
        }
    }})

selector.onchange = (event) =>{
    event.preventDefault();
    diffIndex = selector.selectedIndex;
}

gen.onclick = (event) => {
    event.preventDefault();
    [number,tries] = numGen(diffIndex);
    output.textContent = tries;
    tes = false;
}

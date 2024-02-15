const selectDifficulty= document.getElementById("difficulty");
const selectBtn = document.getElementById("btn");
const inputElement=document.getElementById("input");


let state="Easy";
let numberGuess=5;




function generateNumber(state){
  let randomValue;
  if (state==="Easy"){
    randomValue=Math.floor(Math.random()*10);
  }
  else if (state==="Medium"){
    randomValue=Math.floor(Math.random()*30);
  }
  else if (state==="Hard"){
    randomValue=Math.floor(Math.random()*50);
  }
  return randomValue;
}
function editIntervalLabel(state){
  let selectLabel = document.getElementById("range");
  if (state==="Easy"){
    selectLabel.textContent="Interval: 0 - 10";
  }
  else if (state==="Medium"){
    selectLabel.textContent="Interval: 0 - 30";
  }
  else if (state==="Hard"){
    selectLabel.textContent="Interval: 0 - 50";
  }
}

selectDifficulty.addEventListener("change",() =>{
  const selectedIndex = selectDifficulty.selectedIndex;
  state = selectDifficulty.options[selectedIndex].value;
  numberGuess=generateNumber(state);
  editIntervalLabel(state);
}
)

/*inputElement.addEventListener("keypress",(e)=>{
  if(e.key==="Enter"){
    let inputValue=parseInt(inputElement.value);
    if (inputValue===numberGuess){
      alert("You won!");
    }
    else {
      if (inputValue<numberGuess)
        alert("Your input is smaller than the target");
      else
        alert("Your input is bigger than the target");
    }
  }
})*/

let inputValue=-1;
while(inputValue!==numberGuess){
  inputValue=parseInt(prompt("Guess the number"));
  if (inputValue===numberGuess){
    alert("You won!");
  }
  else {
    if (inputValue<numberGuess)
      alert("Your input is smaller than the target");
    else
      alert("Your input is bigger than the target");
  }
}

selectBtn.addEventListener("click",()=>{
  numberGuess=generateNumber(state);
  alert("A new X has been generated." +
    "Play Again!");
  inputElement.value="";
})






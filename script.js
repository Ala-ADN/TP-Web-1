const selectElement= document.getElementById("difficulty");
let state="Easy";
let x=5;
const selectBtn = document.getElementById("btn");



selectElement.addEventListener('change',() =>{
  const selectedIndex = selectElement.selectedIndex;
    let selectLabel = document.getElementById("range");

    state = selectElement.options[selectedIndex].value;
  if (state==="Easy"){
    x=Math.floor(Math.random()*10);
    selectLabel.textContent="Interval: 0 - 10";
  }
  else if (state==="Medium"){
      x=Math.floor(Math.random()*30);
    selectLabel.textContent="Interval: 0 - 30";

  }
  else if (state==="Hard"){
      x=Math.floor(Math.random()*50);
    selectLabel.textContent="Interval: 0 - 50";

  }
}
)

let inputElement=document.getElementById("input");
inputElement.addEventListener("keypress",(e)=>{
  if(e.key==="Enter"){
    let inputValue=parseInt(inputElement.value);
    if (inputValue===x){
      alert("You won!");
    }
    else {
      if (inputValue<x)
        alert("Your input is smaller than the target");
      else
        alert("Your input is bigger than the target");
    }
  }
})

selectBtn.addEventListener("click",()=>{
  if (state==="Easy"){
    x=Math.floor(Math.random()*10);
  }
  else if (state==="Medium"){
    x=Math.floor(Math.random()*30);
  }
  else if (state==="Hard"){
    x=Math.floor(Math.random()*50);
  }
  alert("A new X has been generated." +
    "Play Again!");
  inputElement.value="";
})






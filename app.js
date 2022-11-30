
let btn = document.querySelector("#button")
function getRandomColor(){

  let val = "0123456789ABCDEF"
  let hex = "#"
  for( let i =0; i<6; i++ ){
    hex = hex + val[Math.floor(Math.random()*16)];
  }
  return hex;
};
 
 function setRandomColor (){
  document.getElementById("canvas").style.background = getRandomColor();
 };


btn.addEventListener("click" , setRandomColor);
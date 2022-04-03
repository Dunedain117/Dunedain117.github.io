const green1=`<a href="https://bit.ly/36P9OJk">https://bit.ly/36P9OJk</a>`;
const green2=`<a href="https://bit.ly/3LrxzGx">https://bit.ly/3LrxzGx</a>`;
const green3=`<a href="https://bit.ly/3NDUekO">https://bit.ly/3NDUekO</a>`;
const purple1=`<a href="https://bit.ly/3LrxEKl">https://bit.ly/3LrxEKl</a>`;
const purple2=`<a href="https://bit.ly/3uzLUK1">https://bit.ly/3uzLUK1</a>`;
const purple3=`<a href="https://bit.ly/3NwYWAS">https://bit.ly/3NwYWAS</a>`;
let flag=false;

function getInputValue(){
  let inputVal = document.getElementById("search").value;
  let answer = document.getElementById('answer');
  if ((inputVal.toLowerCase()=="blu") || (inputVal.toLowerCase()=="verde")){
    answer.innerHTML=purple2;
  }
  else if ((inputVal.toLowerCase()=="giallo") || (inputVal.toLowerCase()=="arancione")){
    answer.innerHTML=purple3;
  }
  else if ((inputVal.toLowerCase()=="green") || (inputVal.toLowerCase()=="rosso")){
    answer.innerHTML=green3;
  }
  else if (inputVal.toLowerCase()=="grigio"){
    answer.innerHTML=green2;
  }
  else if (inputVal.toLowerCase()=="rosa"){
    answer.textContent="Che percorso segui?";
    flag=true;
  }
  else if (inputVal.toLowerCase()=="purple" && flag){
    answer.textContent="Complimenti, hai tutti i colori";
  }
}
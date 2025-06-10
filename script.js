const inputField = document.getElementById("inputField");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const btn = document.getElementById("btn");
const deg = document.getElementById("deg");
const resultSpan = document.getElementById("resultSpan");

function convert(){
    let temp = Number(inputField.value);
    if(toFahrenheit.checked){
        temp = 9/5*temp + 32;
        resultSpan.textContent = temp.toFixed(2);
        deg.style.display = "inline";
        deg.textContent = "︒F";
    }else if(toCelsius.checked){
        temp = 5/9*(temp - 32);
        resultSpan.textContent = temp.toFixed(2);
        deg.style.display = "inline";
        deg.textContent = "︒C";
    }else{
        result.textContent = "select a unit";
    }

    return temp.toFixed(2);
}
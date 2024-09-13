const calcDisplay = document.getElementById("calcDisplay");

const displayRandom = document.getElementById("mainNumber");

function viewInDisplay(input){
    calcDisplay.value += input;
}

function clearCalcDisplay(){
    calcDisplay.value = "";
}

function calculate(){
    try{
        calcDisplay.value = eval(calcDisplay.value)
    }
    catch(error){
        calcDisplay.value = "Math Error"
    }
}

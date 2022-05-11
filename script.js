 
 
var counterVal = 0;  // variavel inica zerada

function incrementClick() {
    updateDisplay(++counterVal); //incrementa variavel
}
function decrementClick() {
    updateDisplay(--counterVal); //decrementa variavel
    {
        if (counterVal == -1) {   //se a variavel for -1
            alert("APENAS QUANTIDADES ACIMA DE 0");  //pop-up avisando usuário
            updateDisplay(counterVal = 0);    //zera novamente a variavel
        }
    }
}
function updateDisplay(val) {
    document.getElementById("counter-label").innerHTML = val;  //altera a variavel em seu local
}



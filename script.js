const billAmount = document.querySelector(".bill-input");
const numberOfPeople = document.querySelector(".people-input");
const customTipPercentage = document.getElementById("custom");
const billTipAmount = document.getElementById("tip-amount");
const billTotalPerPerson = document.getElementById("total-amount");
const resetButton = document.getElementById("reset");
const buttons = document.querySelectorAll(".tip");


//Calculate Tip When Click On Tip Percentage Button
buttons.forEach((button) =>{
    button.addEventListener("click",(e)=>{
       let tipValue = e.target.innerText;
       tipValue = tipValue.substr(0, tipValue.length - 1);

       if (billAmount.value === "") return;
       if (numberOfPeople.value === "") numberOfPeople.value = 1;

       calculateTip(
        parseFloat(billAmount.value),
        parseInt(tipValue),
        parseInt(numberOfPeople.value)
       );

    });
} );


//Calculate Tip When User Give Custom Tip Percentage Input

customTipPercentage.addEventListener("blur", (e) => {
    if(billAmount.value === ""){
        resetEverything();
        return;
    }
    if(numberOfPeople.value === "")numberOfPeople.value = 1;


    calculateTip(
        parseFloat(billAmount.value),
        parseInt(e.target.value),
        parseInt(numberOfPeople.value)
    );
});


//Calculate Tip

function calculateTip(billAmount, tipPercentage, numberOfPeople){
    let tipAmount = (billAmount * (tipPercentage / 100)) / numberOfPeople;
    let tip = Math.floor(tipAmount * 100) / 100;
    tip = tip.toFixed(2);


    let totalAmount = (tipAmount * numberOfPeople + billAmount) /numberOfPeople;
    totalAmount = totalAmount.toFixed(2);

    billTipAmount.innerHTML = `$${tip}`;
    billTotalPerPerson.innerHTML = `$${totalAmount}`
}

//Reset Everything

resetButton.addEventListener("click",resetEverything);

function resetEverything(){
    billTipAmount.innerHTML = "$0.00";
    billTotalPerPerson.innerHTML = "$0.00";
    billAmount.value = "";
    numberOfPeople.value = "";
    customTipPercentage.value = "";
}
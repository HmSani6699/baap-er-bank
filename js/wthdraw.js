//step 1. add the click event for withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {

    //step 2.get the withdraw input field
    let withdrawInputFiled = document.getElementById('withdraw-field');
    let withdrawInputValue = withdrawInputFiled.value;
    let withdrawInputValueString = parseFloat(withdrawInputValue);


    //step 7. clear the withdraw input field
    withdrawInputFiled.value = ''

    if (isNaN(withdrawInputValueString) || withdrawInputValueString < 0) {
        alert(54654654);
        return;
    }

    //step 3.get the withdraw amount
    let previousWithdrawElement = document.getElementById('total-withdraw');
    let previousWithdrawAmount = previousWithdrawElement.innerText;
    let previousWithdrawAmountNumber = parseFloat(previousWithdrawAmount);

    //step 5 set update the balance
    let balanceElement = document.getElementById('total-balance');
    let balancePreviousAmount = balanceElement.innerText;
    let balancePreviousAmountString = parseFloat(balancePreviousAmount);

    if (withdrawInputValueString > balancePreviousAmountString) {
        alert('tomi eto taka paba na');
        return;
    }


    //step 4. set the total withdraw amount
    previousWithdrawElement.innerText = previousWithdrawAmountNumber + withdrawInputValueString

    balanceElement.innerText = balancePreviousAmountString - withdrawInputValueString

    //step 7. clear the withdraw input field
    withdrawInputFiled.value = ''
})
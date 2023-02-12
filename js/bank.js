//step 1. click the deposit button
document.getElementById('deposit-button').addEventListener('click', function () {
    //step 2. get the input value
    let depositInput = document.getElementById('deposit-field');
    let depositInputValue = depositInput.value;
    let depositInputValueString = parseFloat(depositInputValue);

    //step 3.get  the current deposit amount
    let previousDepositElement = document.getElementById('deposit-balance');
    let previousDepositAmount = previousDepositElement.innerText;
    let previousDepositAmountString = parseFloat(previousDepositAmount);

    //step 4.set the deposit balance
    previousDepositElement.innerText = previousDepositAmountString + depositInputValueString

    //step 5 set update the balance

    let balanceElement = document.getElementById('total-balance');
    let balancePreviousAmount = balanceElement.innerText;
    let balancePreviousAmountString = parseFloat(balancePreviousAmount);

    // step 6. set the current balance
    balanceElement.innerText = balancePreviousAmountString + depositInputValueString

    //clear the deposit field
    depositInput.value = ''
})
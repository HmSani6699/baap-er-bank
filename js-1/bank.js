// step 1. set the event handler to deposit button
document.getElementById('deposit-btn').addEventListener("click", function () {

    // step 2. get the deposit input filed
    // and deposit value
    const depositFiled = document.getElementById('deposit-field');
    const depositValueString = depositFiled.value;
    const depositValue = parseFloat(depositValueString);

    //step 3. get the previous deposit amount
    const depositElement = document.getElementById('deposit-element');
    const depositAmountString = depositElement.innerText;
    const depositAmount = parseFloat(depositAmountString);

    // step 4. set the new deposit amount
    depositElement.innerText = depositAmount + depositValue

});

function calculate(test, element) {
    let withdrawElement = document.getElementById(test);
    console.log(withdrawElement)
}

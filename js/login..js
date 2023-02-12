//stp 1.
document.getElementById('submit-button').addEventListener('click', function () {

    //stp 2.
    let emailInput = document.getElementById('input-email');
    let emailValue = emailInput.value;

    //stp 3.
    let passwordInput = document.getElementById('password-input');
    let passwordValue = passwordInput.value;

    if (emailValue == 'hmsani@gmail.com' && passwordValue == 12345) {
        console.log('valid user')
    }
    else {
        console.log('invalid user')
    }
})
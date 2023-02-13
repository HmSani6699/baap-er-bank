//step 1. set event handler to login button
document.getElementById('login-btn').addEventListener('click', function () {
    //step 2. get the email field and value
    const emailFiled = document.getElementById('email-field');
    const emailFiledValue = emailFiled.value

    //step 3. get the password filed and value
    const passwordFiled = document.getElementById('password-field');
    const passwordFiledValue = passwordFiled.value;

    //step 4. get the confirm password filed and value
    const confirmPasswordFiled = document.getElementById('confirm-filed');
    const confirmPasswordFiledValue = confirmPasswordFiled.value;

    //step 5.
    if (emailFiledValue == 'hmsani@gmail.com' && passwordFiledValue == 12345 && confirmPasswordFiledValue == 12345) {
        window.location.href = 'main.html'
    }
    else {
        alert("please provide the valid information")
    }

    //step 6. clear the all input filed
    emailFiled.value = '';
    passwordFiled.value = '';
    confirmPasswordFiled.value = '';
}) 
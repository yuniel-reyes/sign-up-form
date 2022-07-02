// Create confirmPassword()
function confirmPassword(e){
    if (firstPassword !== e.target.value){
        errorMessage.textContent = "Passwords must match"
        e.target.pattern = "";
        return;
    } else {
        errorMessage.textContent = "";
        e.target.pattern = e.target.value;
        return;
    }
}


// Create checkPassword()
function checkPassword(e) {

    if (validFirst && e.target.id == "twice-pwd"){
        confirmPassword(e);
        return;
    }
    
    const UPPER_CASES = /[A-Z]/;
    const LOWER_CASES = /[a-z]/;
    const NUMBERS = /[0-9]/;
    const OTHER_CHARS = /\W/;
    let passWord = e.target.value;

    if ((passWord.length == 0) || (!UPPER_CASES.test(passWord)) || (!NUMBERS.test(passWord)) ||
        (!LOWER_CASES.test(passWord)) || (passWord.length < 8) || (!OTHER_CHARS.test(passWord))) {
            errorMessage.textContent = "Enter valid password";
            e.target.pattern = "";
            // validFirst = false;
            firstPassword = passWord;
            return;
    } else {
        errorMessage.textContent = "";
        e.target.pattern = passWord;
        validFirst = true;
        firstPassword = passWord;
        return;
    }

}
                
// REFERENCES for first password
// Get reference of first password node
const pwdOne = document.querySelector('input[id=pwd]');
// Check passwords
pwdOne.oninput = (e) => checkPassword(e);
// Check password on focus
pwdOne.onfocus = checkPassword;
// Remove error message if focus out            
pwdOne.addEventListener('focusout', (e) => {
    errorMessage.textContent = "";
});

// REFERENCES for second password
// Get reference of password confirmation node
const twicePwd = document.querySelector('input[id=twice-pwd]');
// Check passwords
twicePwd.oninput = (e) => checkPassword(e)
// Check password on focus
twicePwd.onfocus = checkPassword;            
// Remove error msg when focus out of password
twicePwd.addEventListener('focusout', (e) => {
    errorMessage.textContent = "";
});

// Get reference to error message node
const errorMessage = document.querySelector('.error-msg');
// Store first entered password
let firstPassword = "";
let validFirst = Boolean();

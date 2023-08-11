
const form_logIn=document.getElementById('form-log-in');
const form_registration=document.getElementById('form-registration');
const fname=document.getElementById('fname');
const lname=document.getElementById('lname');

const email_log_in=document.getElementById('email-log-in');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password_log_in=document.getElementById('password-log-in');
const passworda=document.getElementById('passworda');
const btn_color=document.getElementById('btn-color');
const registration=document.getElementById('registration');
const logIn=document.getElementById('log-in');


function register(){
    btn_color.style.left="0px";
    logIn.style.left="500px";
    registration.style.left="0";
}

function LogIn(){
    btn_color.style.left="115px";
    logIn.style.left="0";
    registration.style.left="-500px";
}



// ---------------------------------------------------
form_registration.addEventListener('submit',e => {
    e.preventDefault();


    if(validateinputs()){
        this.submit();
    };
   
    
})

form_logIn.addEventListener('submit',e => {
    e.preventDefault();

    if(validateinputs_lg()){
        this.submit();
    };
   
   
    
})
// ------------------------------------------------
const setError=(element,message)=>{
    const inputControl=element.parentElement;
    const errorDisplay=inputControl.querySelector('.error');

    errorDisplay.innerText=message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');

}
const setSuccess= element => {
    const inputControl= element.parentElement;
    const errorDisplay=inputControl.querySelector('.error');

    errorDisplay.innerText= '';
    inputControl.classList.remove('error');
    inputControl.classList.add('success');

}
// ---------------------------------------------------
const validateinputs= ()=>{
    
     
    checkFirsname();
    checkLastname();
    checkEmail();
    checkPassword();
    checkConfirmPassword();


}




const validateinputs_lg= ()=>{
    
   checkEmailLogIn();
   checkPasswordLogIn();
}






// -------------------------------------------------------
const isRequired = (str) => str.trim() === "" ? false : true;
const isBetween = (str) => str.trim() < 10 && str.trim() > 100 ? false : true;


const isEmail = (str) => {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;;
    return re.test(str);
}
const isPassword = (str) => {
    const re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(str);
}
const isCorrectPassword = (pass, repass) => pass !== repass ? false : true;

// -------------------------------------------------------

function checkFirsname() {
    if (!isRequired(fname.value)) {
        setError(fname, 'Firstname is required');
        return false;
    }
    setSuccess(fname);
    return true;

}


function checkLastname() {
    if (!isRequired(lname.value)) {
        setError(lname, 'Lastname is required');
        return false;
    }
    setSuccess(lname);
    return true;
}

function checkEmail() {
    if (!isRequired(email.value)) {
        setError(email, 'Email is required');
        return false;
    } else if (!isEmail(email.value)) {
        setError(email, 'It is not Email');
        return false;
    }

    setSuccess(email);
    return true;
}


function checkPassword() {
    if (!isRequired(password.value)) {
        setError(password, 'Password can not be empty');
        return false;
    } else if (!isPassword(password.value)) {
        setError(password, 'It is not safe');
        return false;
    }
    setSuccess(password);
    return true;
}

function checkConfirmPassword() {
    if (!isRequired(passworda.value)) {
        setError(passworda, "Password can not be empty");
        return false;
    } else if (!isCorrectPassword(password.value.trim(), passworda.value.trim())) {
        setError(passworda, "Password does not match");
        return false;
    }
    setSuccess(passworda);
    return true;
}

function checkEmailLogIn() {
    if (!isRequired(email_log_in.value)) {
        setError(email_log_in, 'Email is required');
        return false;
    } else if (!isEmail(email_log_in.value)) {
        setError(email_log_in, 'It is not Email');
        return false;
    }

    setSuccess(email_log_in);
    return true;
}

function checkPasswordLogIn() {
    if (!isRequired(password_log_in.value)) {
        setError(password_log_in, 'Password can not be empty');
        return false;
    } else if (!isPassword(password_log_in.value)) {
        setError(password_log_in, 'It is not safe');
        return false;
    }
    setSuccess(password_log_in);
    return true;
}

// -------------------------------------------------------


form_registration.addEventListener('input', (event) => {
    switch (event.target.id) {
        case "fname":
            checkFirsname()
            break;

        case "lname":
            checkLastname()
            break;

        case "email":
            checkEmail()
            break;
        case "password":
            checkPassword()
            break;
        case "passworda":
            checkConfirmPassword()
            break;

    }
});

form_logIn.addEventListener('input', (event) => {
    switch (event.target.id) {
        case "email-log-in":
            checkEmailLogIn()
            break;
        case "password-log-in":
            checkPasswordLogIn()
            break;
    }
});




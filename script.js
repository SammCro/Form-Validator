let form = document.getElementById("form");


// Inputs
let userName = document.getElementById("userName");
let eMail = document.getElementById("inputEmail");
let phoneNumber = document.getElementById("phoneNumber");
let password = document.getElementById("inputPassword");
let rePassword = document.getElementById("rePassword");



form.addEventListener("submit",checkForm);


function correct(input){
    input.classList.remove("is-invalid");
    input.nextElementSibling.classList.remove("valid-feedback");
    input.nextElementSibling.innerText = "";
    input.classList.add("is-valid");
    input.nextElementSibling.classList.add("valid-feedback");
}

function wrong(input,message){
    input.classList.remove("is-valid");
    input.nextElementSibling.classList.remove("invalid-feedback");
    input.classList.add("is-invalid");
    input.nextElementSibling.innerText = message;
    input.nextElementSibling.classList.add("invalid-feedback");
}
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

function checkForm(event){

    var phoneno = /^\d{10}$/;
    userName.value.length<7 || userName.value.length>15 ? wrong(userName,"Between 7-15 characters!") : correct(userName);   
    validateEmail(eMail.value) ? correct(eMail) : wrong(eMail,"Wrong e-mail format!");
    phoneno.test(phoneNumber.value) ? correct(phoneNumber) : wrong(phoneNumber,"At least 10 number for phone!");
    password.value.length<5 ?  wrong(password,"At least 5 characters!") :  correct(password) ;
    password.value == rePassword.value && password.value.length!= 0 ? correct(rePassword) : wrong(rePassword,"Passwords do not match!");
    event.preventDefault();
}

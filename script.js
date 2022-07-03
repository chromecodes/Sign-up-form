const mail = document.getElementById("email");
const errormail = document.getElementById("errormail")
const pnumber = document.getElementById("pnumber");
const errornum = document.getElementById("errornum")
const password = document.getElementById("password");
const error1 = document.getElementById("error1")
const cpassword = document.getElementById("cpassword");
const error2 = document.getElementById("error2")

mail.addEventListener("input", function(event){
  if(mail.validity.typeMismatch){
    errormail.textContent = 'Please enter a email address';
  } else {
    errormail.textContent = '';
  }
});

pnumber.addEventListener("input", function(event) {
  if(pnumber.validity.patternMismatch) {
    errornum.textContent = 'Please enter in a phone number';
  } else {
    errornum.textContent = '';
  }
});

password.addEventListener("input", function (event) {
  if (password.validity.patternMismatch){
    const currentValue = password.value;
    const RExpCap = /[A-Z]/g;
    let result = '';
    if (currentValue.length < 9){
      result += 'Password must be at least 8 characters.\n';
      error1.textContent = result;
    } else {
      result += '';  
    };

    if (RExpCap.test(currentValue)){
      result += '';
    } else {
      result += `Missing at least 1 capital letter. `;
    };

    error1.textContent = result;

  } else {
    error1.textContent = '';
  };
});

cpassword.addEventListener("input", function(event) {
  console.log(password.value);
  console.log(cpassword.value);
  if (password.value != cpassword.value) {
    error2.textContent = "password doesn't match"
  } else {
    error2.textContent = ""
  }
});
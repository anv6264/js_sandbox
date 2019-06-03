const randomEmail = require('random-email');

let popup;
function openPopup(){
    popup = window.open('randomEmail', 'My Window', 'height=300, width=300, top=250, left=500');
}
function closePopup(){
    popup.close();
}


const email = document.getElementsByTagName('input');

const validator = require("email-validator");
 
validator.validate("test@email.com"); 

const validate = (validator) => {

        if (email.validator == true){
            input.style.border =  'green';
        }else if (email.validator == null){
            input.style.border =  'grey';
        }else{
            input.style.border =  'red';
        }
  
    return validator.validate(email);
}
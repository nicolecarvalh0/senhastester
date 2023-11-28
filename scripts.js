let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#value");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*()-_+";
let newPassword = "";

let checkPassword = document.querySelector("#input-checkPassword");
let verifiedPassword = document.querySelector("#verifiedPassword");

sizePassword.innerHTML = sliderElement.value;
sliderElement.oninput = function() {
    sizePassword.innerHTML = this.value;
}

function generatePassword(){
    
    let passwordGenerated = "";

    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        passwordGenerated += charset.charAt(Math.floor(Math.random() * n));
    }

    containerPassword.classList.remove("hide");
    password.innerHTML = passwordGenerated;
    newPassword = passwordGenerated;
}

//TO DO: arrumar function pois estava ocasionando 'index.html:1  Uncaught (in promise) DOMException: Document is not focused.'
/*function copyPassword(){
    alert("Senha copiada com sucesso!");
    navigator.clipboard.writeText(newPassword);
}*/

function verifyPassword() {
    const regexCap = /[A-Z]/;
    const regexTiny = /[a-z]/;
    const regexNumber = /[0-9]/;
    const regexSymbol = /[!@#$%&*()\-_+]/;
  
    const enteredPassword = checkPassword.value;

    const hasCap = regexCap.test(enteredPassword);
    const hasTiny = regexTiny.test(enteredPassword);
    const hasNumber = regexNumber.test(enteredPassword);
    const hasSymbol = regexSymbol.test(enteredPassword);
  
    const safePassword = hasCap && hasTiny && hasNumber && hasSymbol;
    
    if(safePassword === true) {
        verifiedPassword.innerHTML = "Sua senha é segura!"
    } else {
        verifiedPassword.innerHTML = "Sua senha não é tão segura..."
    }
}


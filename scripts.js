let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#value");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-input");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!!@#$%&*()-_+";
let newPassword = "";

sizePassword.innerHTML = sliderElement.value;
sliderElement.oninput = function() {
    sizePassword.innerHTML = this.value;
}
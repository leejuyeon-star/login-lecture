"use strict"

const id = document.querySelector("#id");
const psword = document.querySelector("#psword");
const loginbutton = document.querySelector("button");

loginbutton.addEventListener("click", login);

function login() {
    const req = {
        id : id.value,
        psword: psword.value,
    };
    console.log(req);
}


console.log(id);
console.log("hello");
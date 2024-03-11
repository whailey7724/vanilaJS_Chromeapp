const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "usesrname";   // 변수가 아니라 string

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);    // 저장될 아이템의 이름, 값은 username변수
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${savedUsername} !!*^^*`;   
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

console.log(savedUsername);

if(savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greeting
    paintGreetings(savedUsername);      // 여기서는 유저정보가 local storage로부터 오고 있음. 위에(username 사용한 곳)는 input으로부터 오고있음
}
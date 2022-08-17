/*

const a = 5;
const b = "2";
const myName = "nico"
//veryLongVariavbleName = 0;
//camelCase 형태

alert("hi");
console.log("lala");
console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello" + myName);


//alt + B open in browser 단축키

const amIFat = null;
let something = "value";
let something2;
console.log(something2);
console.log(amIFat);


const month = [1, 2, "mon", "tus", "thur", "wed", "sat", "sun"];
console.log(month);
month.push("nonsense")



const player = {
 name: "nico",
 points: 10,
 fat : true
};

player.fat = flase;
console.log(player);
console.log(player.name);


player.name = "potato"
player.points = player.points + 15;
console.log(player);


function sayHello(nameOfPerson, age) {
    console.log("Hello my name is" + nameOfPerson + "age is " + age);
}

console.log("hello");
sayHello("nico");
player.sayHello


//calculator

function plus(firstNumber, SecondNumber){
    console.log(firstNumber + SecondNumber)
};

function divide(a,b) {
    console.log(a / b);
};

console.log(player.name);
player.sayHello("lynn");
player.sayHello("nico");

plus(8, 60);
divide(98, 20);


const k = 5;
let isNicoFat = true;
const j = null;
let hello;
console.log(hello);
//undefined (null이랑 다름)

//var no, always const, 가끔 let
//의미를 명확하게 아는게 좋음.
const me = "sexy";
const toBuy = ["potato", "tomato", "pizza"];

console.log(toBuy[2]);
toBuy[2] = "water"
console.log(toBuy);
toBuy.push("meat");


const player = {
    name: "Nico",
    age: 98,
};

player.name
console.log
console.log(player, console);
//console object에 있는 함수 다 가져옴.

player.name = "player";
console.log((player));
player.name = "nicolas";
player.sexy = "soon";
console.log(player, console);

function plus() {
    console.log(2 + 2);
}

plus();
//function 밖에서 data를 넣을 수 있게하는 것이 좋음.

alert("lalalal");

calculator.plus(1+1);

const age = parseInt(prompt("How old are you?"));

if (isNaN(age)) {
    console.log("please write a number");
    }   else if (age < 18){
        console.log("you are too young");
    }   else if (true && true) {
        console.log("you can drink");
    }   else {
        console.log("Thank you for writting your age");
    }

*/

/*
document.title = "Hello! From JS!";
document.getElementById ("title");

console.dir(title);
console.log(title.id);
console.log(title.class);
title.innetText = "got you!";

console.log(title.className);
*/

/*
const hellos = document.getElementsByClassName("hello");
//const title = document.getElementsByTagName("h1");
const title = document.querySelector(".hello h1");
//쿼리 셀렉터는 hello가 class임을 명시해줘야 함.
const title = document.querySelectorAll(".hello h1");
//class 내에 있는 h1은 전부 가져옴. (array형식)
const title = document.querySelectorAll(".hello h1:first-child");
//첫번째 element 가져옴
const title = document.querySelector("#hello");
const title = document.getElementById("hello");
// 같은 코드

const title = document.querySelector("#hello form");
//변형

console.log(title);

*/

//console.log(title);
//console.dir(title);
//element 내부를 확인할 수 있음

//title.innerText = "Hello";
//title.style.color = "blue";


//title.onclick = handleTitleClick;
//title.onmouseenter = handleMouseenter;
//title.addEventListener("mouseleave", handleMouseleave);

/*
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
   h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);
*/

//const loginform = document.querySelector("#login-form");
/*
const loginform = document.getElementById("login-form");
const loginInput = loginForm.querySelectot("input");
const loginButton = loginForm.querySelectot("button");
*/

//loginButton.addEventListener("click", onLoginBtnClick);
//const loginButton = document.querySelector("#login-form button");

const link = document.querySelector("a");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

greeting.style.color="white"

const HIDDEN_CLASSNAME = "hidden";
//일반적으로 string만 포함된 변수는 대문자로 표기하고 string을 저장하고 싶을때 사용

const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem("username", username);
    `greeting.innerText = "Hello " + username;`
    paintGreetings(username);
}


function handleLinkClick(event){
    event.preventDefault();
    console.log(event);
    alert("clicked!");
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);
//위의 값은 null이거나 string
console.log(savedUsername);

if(savedUsername === null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    //show the greetings
    paintGreetings(savedUsername);
}

link.addEventListener("click", handleLinkClick);



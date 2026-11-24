const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let passOneEl = document.getElementById("passOne-el");
let passTwoEl = document.getElementById("passTwo-el");

let passwordOne = "random_password1";
let passwordTwo = "random_password2";

showPasswords();

function createPass() {
  let newPass = "";
  for (let i = 1; i < 16; i++) {
    let randomChar = characters[Math.floor(Math.random() * characters.length)];
    newPass += randomChar;
  }
  return newPass;
}

function password() {
  passwordOne = createPass();
  console.log(passwordOne);
  passwordTwo = createPass();
  console.log("Button Pushed");
  showPasswords();
}

function showPasswords() {
  passOneEl.textContent = passwordOne;
  passTwoEl.textContent = passwordTwo;
}

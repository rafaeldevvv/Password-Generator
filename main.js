const characters = [
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  "abcdefghijklmnopqrstuvwxyz",
  "1234567890",
  "#$@%&*!?;.,",
];

let btCreate = document.getElementById("btCreate");
btCreate.addEventListener("click", createPassword);

let inLength = document.getElementById("inLength");
// enter to create
inLength.addEventListener("keydown", (event) => {
  if (event.key == "Enter") createPassword();
});
// only numbers
inLength.addEventListener("input", () => {
  let oldValue = inLength.value;

  let newValue = oldValue.replace(/[a-z]|[A-Z]|\W|_/g, "");

  inLength.value = newValue;
});
// create password and show it on the screen
function createPassword() {
  let length = Number(inLength.value);

  if (length == 0 || isNaN(length)) {
    alert("Inform a length for the password.");
    return;
  }

  let psw = "";
  let ckGroup = document.getElementById("ckGroup");
  let ckChar = ckGroup.getElementsByTagName("input");
  console.log(ckChar);

  if (Array.from(ckChar).every((e) => !e.checked)) {
    alert("At least one checkbox must be selected to create a password.");
    return;
  }

  for (let i = 0; i < length; i++) {
    let random;

    do {
      random = Math.floor(Math.random() * 4);
      ckChar[random].checked;
    } while (!ckChar[random].checked);

    psw += getRandom(characters[random]);
  }

  document.getElementById("outPsw").textContent = `Password:\n${psw}`;
}

function getRandom(string) {
  let random = Math.floor(Math.random() * string.length);

  return string[random];
}

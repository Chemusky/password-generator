// Se declaran constantes que almacenan las letras (en mayúscula y minúscula), números, carácteres y espacios
const lowercaseChars = "abcdefghijklmnñopqrstuvwxiz";
const uppercaseChars = "ABCDEFGHIJKLMNÑOPQRSTUVWZYZ";
const numberChars = "0123456789"; /* los número tb son strings */
const symbolChars = "!-$^+";
const spaceChar = " ";

function getRandomChar(chars) {
  // esta función devuelve un caracter aleatorio en base a las constantes declaradas
  const index = Math.floor(Math.random() * chars.length);
  return chars[index];
}
// console.log(getRandomChar(symbolChars));

function generatePassword() {
  const passwordInput = document.getElementById("password");
  const lowercaseCheckbox = document.getElementById("lowercase");
  const uppercaseCheckbox = document.getElementById("uppercase");
  const numbersCheckbox = document.getElementById("numbers");
  const symbolsCheckbox = document.getElementById("symbols");
  const excludeDuplicateCheckbox = document.getElementById("exc-duplicate");
  const spacesCheckbox = document.getElementById("spaces");

  // las 5 condicionales signfican que en el momento que se selecciona la casilla en cuestión,
  // a la variable characters se le añade los caracteres almacenados en constantes
  let characters = "";
  if (lowercaseCheckbox.checked) characters += lowercaseChars;
  if (uppercaseCheckbox.checked) characters += uppercaseChars;
  if (numbersCheckbox.checked) characters += numberChars;
  if (symbolsCheckbox.checked) characters += symbolChars;
  if (spacesCheckbox.checked) characters += spaceChar;

  if (characters === "") {
    // si no hay caracteres disponibles, no genera una contraseña nueva
    passwordInput.value = "";
    return;
  }

  let password = "";
  const length = 12; /* Longitud de la contraseña por defecto */

  while (password.length < length) {
    let char = getRandomChar(characters);
    if (excludeDuplicateCheckbox.checked && password.includes(char)) continue;
    password += char;
  }
  passwordInput.value = password;
}

function copyPassword() {
  const passwordInput = document.getElementById("password");
  const copyButton = document.getElementById("copy");

  passwordInput.select();
  passwordInput.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(passwordInput.value);

  // alert(`La contraseña copiada es ${passwordInput.value}`); /* se muestra un mensaje de alerta de lo que se ha copiado al portapales */

  copyButton.textContent = "Copied!";
  setTimeout(() => {
    copyButton.textContent = "Copy";
  }, 2000);
}

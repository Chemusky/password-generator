// const srt = "hello world";

// console.log(srt[1]);

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
console.log(getRandomChar(symbolChars));

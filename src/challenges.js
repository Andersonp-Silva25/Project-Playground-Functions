// Desafio 1
function compareTrue(value1, value2) {
  if(value1 === true && value2 === true){
    return true;
  }else{
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let separator = " ";
  let array = string.split(separator);
  return array;
}

// Desafio 4
function concatName(names) {
  let firstPosition = names[0];
  let lastPosition = names[names.length-1];
  return lastPosition +", "+ firstPosition;
}

// Desafio 5
function footballPoints(wins, ties) {
  totalWins = wins * 3;
  totalTies = ties * 1;
  result = totalWins + totalTies;
  return result;
}

// Desafio 6
function highestCount(numbers) {
  let higherNumber = numbers[0];
  let countNumbers = 0;
  for(let index = 0; index < numbers.length; index += 1){
    if(higherNumber < numbers[index]){
      higherNumber = numbers[index];
    }
  }
  for(let index = 0; index < numbers.length; index += 1){
    if(higherNumber === numbers[index]){
      countNumbers += 1;
    }
  }
  return countNumbers;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};

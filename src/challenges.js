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
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1AndMouse = cat1 - mouse;
  let distanceCat2AndMouse = cat2 - mouse;
  if(distanceCat1AndMouse < 0){
    distanceCat1AndMouse = mouse - cat1;
  }
  if(distanceCat2AndMouse < 0){
    distanceCat2AndMouse = mouse - cat2;
  }
  if(distanceCat1AndMouse < distanceCat2AndMouse){
    return "cat1";
  }else if(distanceCat1AndMouse > distanceCat2AndMouse){
    return "cat2";
  }else if(distanceCat1AndMouse === distanceCat2AndMouse){
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(numbers) {
  let result = [];

  for(let index = 0; index < numbers.length; index += 1){
    if(numbers[index]%3 === 0 && numbers[index]%5 === 0){
      result.push("fizzBuzz");
    }else if(numbers[index]%3 === 0){
      result.push("fizz");
    }else if(numbers[index]%5 === 0){
      result.push("buzz");
    }else{
      result.push("bug!");
    }
  }
  return result;
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

// Desafio 11
function generatePhoneNumber(numbers) {
  let arrayNumbers = [];
  let thriceRepeat = 0;
  let phoneNumbers = "";

  if(numbers.length !== 11){
    return 'Array com tamanho incorreto.';
  }

  for(let index = 0; index < numbers.length; index += 1){
    for(let compare = 1; compare < numbers.length; compare += 1){
      if(numbers[index] === numbers[compare]){
        thriceRepeat += 1;
        if(thriceRepeat > 2){
          return 'não é possível gerar um número de telefone com esses valores';
        }
      }
    }
    if(numbers[index] < 0 || numbers[index] > 9){
      return 'não é possível gerar um número de telefone com esses valores';
    }
    thriceRepeat = 0;
    arrayNumbers.push(numbers[index]);
  }
  phoneNumbers = "("+arrayNumbers[0]+arrayNumbers[1]+") "+arrayNumbers[2]+arrayNumbers[3]+arrayNumbers[4]+arrayNumbers[5]+arrayNumbers[6]+"-"+arrayNumbers[7]+arrayNumbers[8]+arrayNumbers[9]+arrayNumbers[10];

  return phoneNumbers;
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};

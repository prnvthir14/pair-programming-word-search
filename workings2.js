const transposeLettersArray = require('./workings')

let x = [
  ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
  ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
  ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
  ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
  ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
  ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
  ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
]

const horizontalJoin = x.map(ls => ls.join(''));
console.log(horizontalJoin)
let xTransposed = transposeLettersArray(x);
console.log('-----')

const verticalJoin = xTransposed.map(ls => ls.join(''));
console.log(verticalJoin)

for (let i = 0; i < horizontalJoin.length; i++){

  for (let j = 0; j < verticalJoin.length; j++){

    // console.log(horizontalJoin[i])
    // console.log(verticalJoin[j])

  }

}


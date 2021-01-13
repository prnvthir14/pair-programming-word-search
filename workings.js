const transposeLettersArray = function(matrix) {
  let arr = [];
  //for the length of the 1st column in the input, create the same number of rows in arr
  for(let i = 0; i < matrix[0].length; i++){
    arr.push([])
    for(let j = 0; j < matrix.length; j++){
      arr[i].push(matrix[j][i])
    }
  }
  return arr
};


const wordSearch = function (letters, word){

  //stores horizontal strings
  //const horizontalJoin = letters.map(ls => ls.join(''))
  //stores vertical strings
  const horizontalJoin = letters.map(ls => ls.join(''))
  //console.log(horizontalJoin)
  for (l of horizontalJoin){

    console.log(`this is l: ${l} and this is my word:${word}`)
    if (l === word){

      return true

    }

  }
  return false;


}


// console.log(wordSearch([
//   ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//   ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
//   ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
//   ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
//   ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
//   ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
//   ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//   ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//   ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
// ], 'SEINFELD') )//should return true AND DOES

// console.log(wordSearch([
//   ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//   ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
//   ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
//   ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
//   ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
//   ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
//   ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//   ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//   ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
// ], 'FRANK') )//should False true 


// //try to rewrite transpose fn
// const transposeLettersArray = function (letters){

//   let returnArray = []
//   for (let i = 0; i <letters[0].length; i++) {
 
//     returnArray.push([]);

//     for (let j = 0; j< letters.length; j++ ) {
      
//       returnArray.push(letters[j][i])  
//     }
//   }

//   return returnArray

  
// }


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
console.log(transposeLettersArray(x))

module.exports = transposeLettersArray;
const transpose = function(matrix) {
    let output = [];
    //length of output array should be equal to length of any element inside of the input array
     for(let i = 0; i < matrix[0].length; i++) {
        output.push([]);
     }
     for(let j = 0; j < matrix.length; j++) {
         for(let k = 0; k < matrix[j].length; k++) {
             output[k].push(matrix[j][k]);
         }
     }
     return output;
    };


const wordSearch = (letters, word) => {
    let foundWord=0;
    if(!word) {
        return false;
    }

    let lettersTransposed = transpose(letters);
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        
        if (l.includes(word)){
         foundWord++;

        }
    } 
    
    const verticalJoin = lettersTransposed.map(ls => ls.join(''))
    for (v of verticalJoin) {
        
        if (v.includes(word)){
         foundWord++;

        }
    } 
    if (foundWord <= 0){
        return false
    } else {
        return true;
    }
}

module.exports = wordSearch
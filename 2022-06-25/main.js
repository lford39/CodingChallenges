// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

//Solution
function digital_root(n) {

   let nArray= n.toString().split('').map(e=> Number(e))
   let sum = nArray.reduce((acc,c)=> acc + c, 0)

   if(sum < 10){
    return sum

   }else if(sum > 9){
    let sArray = sum.toString().split('').map(e=> Number(e))
    let secondSum = sArray.reduce((acc,c)=> acc + c, 0)
    if(secondSum > 9){
        let tArray = secondSum.toString().split('').map(e=> Number(e))
        let thirdSum = tArray.reduce((acc,c)=> acc + c, 0)
        return thirdSum
    }else{
        return secondSum
    }
    
   }
  }

//or

function digital_root(n) {
    if (n < 10) return n;
    
    return digital_root(
      n.toString().split('').reduce(function(acc, d) { return acc + +d; }, 0));
  }
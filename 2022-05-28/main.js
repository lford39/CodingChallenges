//Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.let arrNumsNums= arrNums.

// Note: The function accepts an integer and returns an integer 

//Solution

  function squareDigits(num){
    let arrNums = Number(num.toString().split('').map(x => Number(x)).map(x => Math.pow(x,2)).join(''))
    return arrNums
    
  }

  squareDigits(9119)
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

    // Examples:
    // Input: 42145 Output: 54421
    // Input: 145263 Output: 654321
    // Input: 123456789 Output: 987654321

//Solution

//turn number into string, use split to make an array, use sort to put numbers in order, use join to put back together, use Number to convert final string into number
function descendingOrder(n){
    return Number(n.toString().split('').sort((a,b)=> b-a).join(''))
  }
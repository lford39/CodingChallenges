// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:
    // Kata.getMiddle("test") should return "es"

    // Kata.getMiddle("testing") should return "t"

    // Kata.getMiddle("middle") should return "dd"

    // Kata.getMiddle("A") should return "A"

// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here


//take word, split into an array, use modulus with conditional for words with even/odd number of letters
// evens- charAt method with array[array.length/2]
//odds- charAt method with more steps; array[array.length/2] with foor and ceiling methods


//Solution
function getMiddle(s){
 let array = s.split('')
 if(array.length%2 === 0){
    return (s.charAt((array.length/2)-1)+(s.charAt(array.length/2)))
 }else if(array.length%2 !== 0){
    return (s.charAt(Math.floor(array.length/2))) 
 }
}

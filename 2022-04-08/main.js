// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
// Note: input will never be an empty string

//Solution
function fakeBin(x){
    return x.split('').map(n => n < 5 ? 0 : 1).join('')
  }
  //.split('') turns x into an array
  //.map() iterates through array and returns new array
  //arrow function with ternary operator- asks is n less than 5? 
  //Subtitutes 0 if true or 1 if false
  //.join('') turns array into string
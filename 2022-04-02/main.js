//Multiply the Number- Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:...

//Solution
function multiply(number){
    return number * Math.pow(5, Math.abs(number).toString().length);
  }
  
  //the "number" variable is multiplied by 5 raised to the number of digits in variable- 
  //the base and exponent are determined by using Math.pow (base number 5, exponent is the number of variable digits)
  //the exponent cannot be negative (index starts at 0), so Math.abs gives absolute value of variable
  //.toString converts exponent to string BECAUSE
  //.length returns length of string, so we have to convert number to string first
  //.length determines the number of digits of the variable from the newly deteremined string
  

//It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

//Solution
function removeChar(str){
   let strArr = str.split('')
   strArr = strArr.slice(1,-1)
   let newStr = strArr.join('')
   return newStr
}

//or
function removeChar(str){
    //You got this!
     str1 = str.split('');
     str1.shift();
     str1.pop();
     return str1.join('');
       
   };

//or
function removeChar(str) {
    return str.slice(1, -1);
  }
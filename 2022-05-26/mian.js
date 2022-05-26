// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

//Solution

function getCount(str) {
    let vowelsCount = 0;
    let vowelsArr = []
    
    str.split('').map(e => e === 'a' || e === 'i' || e === 'o' || e === 'e' || e === 'u' ? vowelsArr.push(e) : false)
    
    vowelsCount = vowelsArr.length
    
    return vowelsCount
  }

  getCount('the quick red fox jumped over the lazy brown dog')

  //Other solutions
  function getCount(str) {
    return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
   }

   function getCount(str) {
    var vowelsCount = 0;
    str.split("").forEach(function(x){
      if(x == "a" | x == "e" | x == "i" | x == "o" | x == "u"){
        vowelsCount += 1;
      }
    });  
    return vowelsCount;
  }
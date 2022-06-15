// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

        // Examples:
        // a = "xyaabbbccccdefww"
        // b = "xxxxyyyyabklmopq"
        // longest(a, b) -> "abcdefklmopqwxy"

        // a = "abcdefghijklmnopqrstuvwxyz"
        // longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

//Solution
function longest(s1, s2) {
    //split strings into two arrays
    let s1Array = s1.split('')
    let s2Array = s2.split('')
    //combine two arrays and sort alphabetically
    let merged = s1Array.concat(s2Array).sort()
    //filter method- inlcude letter if condition is true: does the index of the current element equal the indexOf that letter in the array? indexOf returns the index of the element at its first occurence, so any other index would be false for duplicates
    return merged.filter((letter, index)=> merged.indexOf(letter) === index).join('')

  }

  longest( "xyaabbbccccdefww", "xxxxyyyyabklmopq")

  //or
  const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')
  
  //or
  function longest(s1, s2) {
    return Array.from(new Set(s1 + s2)).sort().join('');
  }

  //or
  function longest(s1, s2) {
    s3 = s1 + s2;
    s4 = s3.split("");
    s4 = s4.sort().filter(function(element, index, array){
      return element !== array[index - 1];
    });
    return s4.join("");
  }
// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
    // Note: for this kata y isn't considered a vowel.

//Solution
function disemvowel(str) {
    let strArr = []
    str.split('').map(e => e !== 'a' && e !== 'e' && e !== 'i' && e !== 'o' && e !=='u'&& e !== 'A' && e !== 'E' && e !== 'I' && e !== 'O' && e !=='U'  ? strArr.push(e) : false )
    str = strArr.join('')
    return str;
  }

//Or

function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
  }
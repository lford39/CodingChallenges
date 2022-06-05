// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

//Solution

//convert string to an array, loop through array- comparing each element to the next, conditional?, if element == element (value, not type to avoid letter case issues), false; not equal true and add to new array
function isIsogram(str){
    let wordArr = str.toLowerCase().split('').sort()
    let newWordArr = wordArr.map((e,i) =>{
        if(e === wordArr[i+1]){
            return false
        }else{
            return true
        }
    })
    if(newWordArr.includes(false)){
        return false
    }else{
        return true
    }
}


//Refactored:

  function isRefIsogram(str){
    let wordArr = str.toLowerCase().split('').sort()
    let newWordArr = wordArr.map((e,i)=> e === wordArr[i+1]? false: true)
    return (newWordArr.includes(false) ? false: true)
}

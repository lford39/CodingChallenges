// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

//Solution

function findShort(s){
    let strArr = s.split(' ')
    let lengthArr = strArr.map(word => word.length).sort((a,b)=> a-b)
    return lengthArr[0]
}

findShort('I went to school and did my homework')
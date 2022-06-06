// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

//Solution

//working with a string, likely will use conditional to return Boolean, will use string method toLowerCase to account for cases, way to count how many of a certain letter in a string, convert to array?, filter will only return an array with elements that are accounted for, do filter twice- one for xs and one for os, then compare lengths of the two arrays, if lengths are equal, if empy array, still return true
function XO(str) {
    let arr = str.toLowerCase().split('')
    let xArr= []
    let oArr =[]
    let newArrs= arr.map(e =>{
        if(e == 'x'){
            xArr.push(e)
        }else if(e === 'o'){
            oArr.push(e)
        }else{
            return true
        }
    })

    if(xArr.length === oArr.length){
        return true
    }else if(xArr.length !== oArr.length){
        return false
    }
}

//or
function XO(str) {
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}
//Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

//solution
function digitize(n) {
    let str = n.toString()
    str = str.split('')
    str = str.reverse()
    let arr = str.map(x=> Number(x))
    return arr
}

//Refactored 

function digitize(n){
    return n.toString().split('').reverse().map(x=>Number(x))
}
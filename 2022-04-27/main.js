// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
    // Sam Harris => S.H
    // patrick feeney => P.F

//Solution

function abbrevName(name){
    let arr = name.toUpperCase().split(' ')
    let firstInit = arr[0].split('')
    firstInit= firstInit[0]
    let secondInit = arr[1].split('')
    secondInit = secondInit[0]
    return `${firstInit}.${secondInit}`
}

//or

function abbrevName(name){

    var nameArray = name.split(" ");
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
  }

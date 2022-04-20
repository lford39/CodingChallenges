//Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
    // For example,
    // [true,  true,  true,  false,
    //   true,  true,  true,  true ,
    //   true,  false, true,  false,
    //   true,  false, false, true ,
    //   true,  true,  true,  true ,
    //   false, false, true,  true]
    // The correct answer would be 17.
// Hint: Don't forget to check for bad values like null/undefined

//Solution

//we have an array that contains and unknown number of true and false elements. We want to figure out how many elements are TRUE in the array.

//Make a new array with only the true elements- then find out how many using arr.length


function countSheeps(arrayOfSheep){
    let sheep = []
    arrayOfSheep.forEach(n =>{
        if (n === true){
            sheep.push(n)
        }
    })
    return sheep.length
}

//or
function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
  }
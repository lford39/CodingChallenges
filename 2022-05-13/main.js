//Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.

//Solution
function find_average(array) {
    if(array.length === 0){
        return 0
    }else{
        return (array.reduce((acc,c)=> acc+c, 0))/array.length
    }
  }

//Refactored
var find_average = (array) => {  
    return array.length === 0 ? 0 : array.reduce((acc, c)=> acc + c, 0)/array.length
  }
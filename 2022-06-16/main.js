// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

        // Examples (Input --> Output)
        // "1234"   -->  true
        // "12345"  -->  false
        // "a234"   -->  false

//Solution
function validatePIN (pin) {
    let pinArray = pin.split('')
    if(pinArray.length === 4 || pinArray.length === 6){
        let newArray = pinArray.filter((x) => !isNaN(parseInt(x)))
        if(newArray.length !== pinArray.length){
            return false
        }else{
            return true 
        }
    }else{
        return false
    }   
}

validatePIN("a234")
validatePIN("1234")
validatePIN("12345")

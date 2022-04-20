//Description:
// Make a simple function called greet that returns the most-famous "hello world!".
    // Style Points
    // Sure, this is about as easy as it gets. But how clever can you be to create the most creative hello world you can think of? What is a "hello world" solution you would want to show your friends?

//Solution
function greet(){
    let alpha = "abcdefghijklmnopqrstuvwxyz"
    let alphaArr= alpha.split('')
    let firstWord = alphaArr[7]+alphaArr[4]+alphaArr[11]+alphaArr[11]+alphaArr[14]
    let secondWord = alphaArr[22]+alphaArr[14]+alphaArr[17]+alphaArr[11]+alphaArr[3]
    return firstWord + " " + secondWord + "!"
}
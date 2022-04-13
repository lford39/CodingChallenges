//Write a function called repeatStr which repeats the given string string exactly n times.
    // repeatStr(6, "I") // "IIIIII"
    // repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

    function repeatStr (n, s) {
        return s.repeat(n);
      }
      
//uses repeat() method- constructs and returns a new string which contains the specified number of copies of the string on it, concatenated
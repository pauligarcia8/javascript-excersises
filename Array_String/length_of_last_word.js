// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal 
// substring
//  consisting of non-space characters only.

 

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

var lengthOfLastWord = function(s) {
    console.log(s.length);
    let length = 0;
    let inWord = false;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== ' ') {
            // Si el carácter no es un espacio, estamos en una palabra
            inWord = true;
            length++;
            console.log(length, s[i]);
        } else if (inWord) {
            // Si encontramos un espacio después de haber comenzado a contar una palabra, terminamos
            break;
        }
    }
    return length
};

console.log(lengthOfLastWord('hola como estas'))
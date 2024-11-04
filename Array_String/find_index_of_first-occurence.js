// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.

function strStr(haystack, needle) {
    // si needle es vacio retorna 0
    if (needle === "") return 0;

    // saca length de los parametros de haystack y needle
    const haystackLength = haystack.length;
    const needleLength = needle.length;
    // For Loop de haystack
    for (let i = 0; i <= haystackLength - needleLength; i++) {
        let j = 0; // puntero para saber el index
        
        // While loop para comparar cada caracter de needle
        while (j < needleLength && haystack[i + j] === needle[j]) {
            console.log('j', j, 'i', i, haystack[i + j], needle[j]);

            j++;
        }
        
        // sale del while loop y comparamos length de needle con j
        if (j === needleLength) {
            return i;
        }
    }

    // Si no hay match retorna -1
    return -1;
}


const haystack1 = "butsad";
const needle1 = "sad";
console.log(strStr(haystack1, needle1));  // Output: 0

const haystack2 = "leetcode";
const needle2 = "leeto";
console.log(strStr(haystack2, needle2));  // Output: -1

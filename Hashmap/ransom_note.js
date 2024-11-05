// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

 

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true

function canConstruct(ransomNote, magazine) {
    // Contador de letras en magazine
    const countMagazine = {};

    // Llenamos el contador con las letras de magazine
    for (const char of magazine) {
        countMagazine[char] = (countMagazine[char] || 0) + 1;
    }

    // Verificamos cada letra en ransomNote
    for (const char of ransomNote) {
        // Si no hay suficientes letras o la letra no está en magazine
        if (!countMagazine[char] || countMagazine[char] === 0) {
            return false;
        }
        // Reducimos el contador de la letra
        countMagazine[char]--;
    }

    return true;
}

console.log(canConstruct('acod', 'aabado'));
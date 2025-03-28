// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

const strs = ["flower", "flow", "flight"];

var longestCommonPrefix = function(words) {
    if (!words.length) return "";
    
    let prefix = "";
    
    for (let i = 0; i < words[0].length; i++) { 
        let char = words[0][i]; 
        
        for (let j = 1; j < words.length; j++) { 
            if (i >= words[j].length || words[j][i] !== char) {
                return prefix; 
            }
        }
        
        prefix += char; 
    }
    
    return prefix;
};

console.log(longestCommonPrefix(strs));

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    // Store counts of letters from the mazazine in this dictionary
    var letters = {}
    
    // Add counts all of the letters from the magazine to the dictionary
    for(var i = 0; i < magazine.length; i++){
        var letter = magazine[i]
        // If it doesn't exist, set it to 1
        if(!letters[letter]) {
            letters[letter] = 1
        } else {
            // Otherwise, increment the counter
            letters[letter] ++
        }
    }
    
    // Check that the note matches
    for(var i = 0; i < ransomNote.length; i++){
        var letter = ransomNote[i]
        
        // Check if we have a letter remaining
        if(letters[letter] >= 1) {
            // Decrement the counter for this letter
            letters[letter] --
        } else {
            // We don't have one, return false
            return false
        }
        
        // If the count of the letter has hit 0, delete it from the dictionary
        if(letters[letter] == 0) {
            delete letters[letter]
        }
    }
    
    return true
};

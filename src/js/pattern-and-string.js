exports.checkStringForPattern = function(pattern, string) {
    'use strict';

    // Just make sure that pattern is an array and string is a string
    // this can be omitted if we're sure the input is of the correct type.
    if (!(pattern instanceof Array)) {
        throw "'pattern' should be an array";
    }
    if (typeof string !== 'string') {
        throw "'string' should be a string";
    }

    var substrings = string.split(' ');

    // If the pattern doesn't match in size the number of space-separated
    // substrings, then it cannot match the string.
    if (pattern.length !== substrings.length) {
        return false;
    }

    var dict = {};

    return pattern.every(function(key, index) {
        var curSubstring = substrings[index];

        if (key in dict) {
            // If the pattern-key was already seen, but matching a different substring
            // it means the pattern doesn't match the string.
            if (curSubstring !== dict[key]) {
                return false;
            }
        } else {
            // If the pattern-key is new, but the substring was already assigned to another
            // pattern-key, it means that the pattern doesn't match the string.
            // This is equivalent to curSubstring appearing earlier in substrings[].
            for (var i = 0; i < index; i++) {
                if (substrings[i] === curSubstring) {
                    return false;
                }
            }
            // Add the pattern-key to the dictionary
            dict[key] = curSubstring;
        }
        // All tests passed, so for this iteration, the pattern matches.
        return true;
    });
};

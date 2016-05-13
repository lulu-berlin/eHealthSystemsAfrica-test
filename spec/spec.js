'use strict';

var pattern_and_string = require('../src/js/pattern-and-string');

describe('checkStringForPattern', function() {
    it("should return false if the length of the pattern doesn't match " +
            "the number of space separated substrings", function() {
        var pattern = [1];
        var string = "cat dog dog cat";
        var result = pattern_and_string.checkStringForPattern(pattern, string);
        expect(result).toBe(false);
    });

    it("should return true if the pattern matches the string", function() {
        var pattern = [1, 2, 2, 1];
        var string = "cat dog dog cat";
        var result = pattern_and_string.checkStringForPattern(pattern, string);
        expect(result).toBe(true);
    });

    it("should return false if the pattern matches the string", function() {
        var pattern = [1, 2, 2, 1];
        var string = "dog dog cat cat";
        var result = pattern_and_string.checkStringForPattern(pattern, string);
        expect(result).toBe(false);
    });

    it("should return false if the pattern has different keys " +
            "matching the same substring", function() {
        var pattern = [1, 2, 3, 4];
        var string = "cat cat cat cat";
        var result = pattern_and_string.checkStringForPattern(pattern, string);
        expect(result).toBe(false);
    });

    it("should return false if the pattern has the same key " +
            "matching different substrings", function() {
        var pattern = [1, 1, 1, 1];
        var string = "cat dog horse bird";
        var result = pattern_and_string.checkStringForPattern(pattern, string);
        expect(result).toBe(false);
    });
});

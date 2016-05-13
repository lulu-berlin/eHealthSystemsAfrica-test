'use strict';

var perfect_number = require('../src/js/perfect-number');

describe('isPerfectNumber', function() {
    var isPerfectNumber = perfect_number.isPerfectNumber;

    it("should return 'false' if the number is not an integer", function() {
        var result = isPerfectNumber(1.5);
        expect(result).toBe(false);
    });

    it("should return 'false' if the number is negative", function() {
        var result = isPerfectNumber(-6);
        expect(result).toBe(false);
    });

    it("should return 'false' if the number is odd", function() {
        var result = isPerfectNumber(3);
        expect(result).toBe(false);
    });

    it("should return 'true' for known perfect numbers in the range of javascript positive integers", function() {
        var result =
            [6, 28, 496, 8128, 33550336, 8589869056, 137438691328]
                .every(function(n) {
                    return isPerfectNumber(n);
                });
        expect(result).toBe(true);
    });

    it("should return 'false' for non perfect numbers", function() {
        var result =
            [16, 128, 1496, 9999, 34467896, 8999999956, 111111111118]
                .some(function(n) {
                    return isPerfectNumber(n);
                });
        expect(result).toBe(false);
    });
});

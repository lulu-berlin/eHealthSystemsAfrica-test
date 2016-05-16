'use strict';

var perfect_number = require('../src/js/perfect-number');

describe('isPerfectNumber', function() {
    var isPerfectNumber = perfect_number.isPerfectNumber;

    it("should return 'false' if the number is not an integer",
        function() {
            var result = isPerfectNumber(1.5);
            expect(result).toBe(false);
        });

    it("should return 'false' if the number is negative",
        function() {
            var result = isPerfectNumber(-6);
            expect(result).toBe(false);
        });

    it("should return 'false' if the number is odd",
        function() {
            var result = isPerfectNumber(3);
            expect(result).toBe(false);
        });

    it("should return 'true' for known perfect numbers " +
        "in the range of javascript positive integers",
        function() {
            var knownPerfectNumbers = [6, 28, 496, 8128, 33550336, 8589869056, 137438691328];
            var result = knownPerfectNumbers.every(function(n) {
                return isPerfectNumber(n);
            });
            expect(result).toBe(true);
        });

    it("should return 'false' for non perfect numbers",
        function() {
            var knownPerfectNumbers = [6, 28, 496, 8128, 33550336, 8589869056, 137438691328];
            var nonPerfectIntegers = [];
            // fill the array with non perfect numbers
            for (var i = 0; i < 100; i++) {
                var rnd = Math.floor(Math.random() * 10000);
                    // if it's a known perfect number, change it
                while (rnd in knownPerfectNumbers) {
                    rnd = Math.floor(Math.random() * 10000);
                }
                nonPerfectIntegers.push(rnd);
            }
            var result = nonPerfectIntegers.some(function(n) {
                return isPerfectNumber(n);
            });
            expect(result).toBe(false);
        });
});

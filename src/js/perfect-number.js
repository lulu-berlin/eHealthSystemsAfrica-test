exports.isPerfectNumber = function(number) {
    'use strict';

    // perfect numbers are positive even integers
    // (the existence of odd perfect numbers is unknown and at any rate,
    // none exists in the range of positive integers that can be stored in
    // a javascript number type).
    if (number !== Math.abs(Math.floor(number)) || number % 2 !== 0) {
        return false;
    }

    var sqrtNumber = Math.floor(Math.sqrt(number));
    var sumDivisors = 1;
    for (var i = 2; i < sqrtNumber; i++) {
        if (number % i === 0) {
            sumDivisors += (i + number / i);
        }
    }
    if (number % sqrtNumber === 0) {
        sumDivisors += sqrtNumber + (sqrtNumber * sqrtNumber === number ? 0 : number / sqrtNumber);
    }
    return number === sumDivisors;
};

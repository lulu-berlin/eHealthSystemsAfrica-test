# A programming test in JavaScript

This repository contains my answers to the test I've been given by eHealth Systems Africa in JavaScript.

The implementation code of the solutions to the test are in
[src/js](src/js).

Unit tests were written to test the solutions using the Jasmine testing
framework and gulp.

To run the tests you would need npm and gulp:

```sh
npm install -g gulp 
npm install
gulp
```

# 1. Pattern and String

## Description:

Given a pattern and a string, find if the string follows the same pattern.

Eg: Pattern : [a, b, b, a], String : "cat dog dog cat"

## Solution:

The implementation can be found in
[src/js/pattern-and-string.js](src/js/pattern-and-string.js). 

I have assumed that the pattern is an array of distinct objects (whatever
``a`` and ``b`` refer to in the example). 

It first checks that the number of elements in the pattern array is
identical to the number of space-separated substrings. Then, a dictionary
is created mapping the pattern objects to the substrings. For each element
in the pattern, it is checked if the corresponding substring already
appeared in the dictionary. If it did, then the current substring must
match the value it has in the dictionary. Otherwise (if the pattern
element is new), it should be made sure that the current substring wasn't
mapped earlier to another pattern element. If all tests pass, the pattern
matches the string.

# 2. Perfect Number

## Description:

Given a number N return whether N is a perfect number or not.

Explain the time and memory complexity of your implementation.

(A perfect number is a positive integer that is equal to the sum of its
proper positive divisors

excluding the number itself)

## Solution:

The implementation can be found in
[src/js/perfect-number.js](src/js/perfect-number.js).

All known perfect numbers are positive even integers. Odd perfect numbers
were excluded because they are certainly not found within the range of
positive integers representable by javascript.

Divisors were checked only up to the square root of the number, including
the complementary divisor (number divided by the found divisor). The
complementary of the square root is only added if it is not identical to
the number that is being checked.

The memory complexity of this implementation is O(1) including only
a variable for the sum of divisors and one to store the square root of the
number.

The time complexity is O(sqrt_N) at the worst case (if the number is
indeed a positive even integer).

# 3. Scheduling Meetings

## Description:

You have a number of meetings (with their start and end times).

You need to schedule them using the minimum number of rooms.

Return the list of meetings in every room as well as their starting and
ending timestamps.

## Solution:

The implementation can be found in
[src/js/meetings-rooms.js](src/js/meetings-rooms.js).

The function ``scheduleMeetings(meetings)`` accepts an array of timestamps
(each one is an array of two elements: beginning time and end time of
a meeting). It returns an array of rooms; each room is an array of meeting
in that room; each meetin is an array of a beginning time and an end time.

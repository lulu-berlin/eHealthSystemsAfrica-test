# A programming test in JavaScript

This repository contains my answers to the test I've been given by eHealth Systems Africa in JavaScript.

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

# 3. Scheduling Meetings

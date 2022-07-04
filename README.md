# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @wescorner/lotide`

**Require it:**

`const _ = require('@wescorner/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:
* `letterPositions(string)`: Returns object where keys are each unique character in string, and values are arrays of positions where those characters occur 
* `countLetters(string)`: Returns object where keys are each unique character in string, and values are number of occurrences  
* `head(array)`: Return the first element of the input array
* `middle(array)`: Returns the middle element of the input array, returns array of middle two elements if input array is even length
* `tail(array)`: Returns array including all elements but the first
* `flatten(array)`: Converts array with nested array elements to single-dimension array 
* `map(array, function)`: Iteratively applies input function on each element of input array and returns resulting array
* `without(array, itemsArray)`: Returns input array with any elements that occur in the items array removed
* `takeUntil(array, function)`: Returns array with items added from the input array until input function evaluates to 'true'
* `eqArrays(array1, array2)`: Returns true if two input arrays are exactly equal, and false if they are not
* `eqObjects(object1, object2)`: Returns true if two input objects are exactly equal, and false if they are not
* `findKeyByValue(object, value)`: Returns key from input object that contains input value, returns undefined if no key found
* `countOnly(object, itemsObject)`: Returns object where keys are keys from input object, and values are occurrences in the input object. Only adds keys to return object when the value for that key in the itemsObject input is 'true'
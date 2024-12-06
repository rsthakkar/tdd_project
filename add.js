'use strict'

/**
 * Return sum of separated numbers in string
 * @param {string} numbers
 * @returns {number} 
 */
const add = (numbers) => {
   return getSumFromString(numbers, ',');
};

/**
 * Return sum of numbers wihtin string with dynamic separator
 * @param {string} numbers 
 * @param {string} separator 
 * @returns {number}
 */
const getSumFromString = (numbers, separator) => {
    let numbersArr = numbers.split(separator);
    let sum = 0;
    numbersArr.map((number) => {

        if (number && !containsOnlyDigits(number)) {
            // initially added support for new line using map but later to reuse the same sum logic used recursion
            // let numbersArrWithNewLine = number.split("\n");
            // numbersArrWithNewLine.map((number) => {
            //     sum += Number(number);
            // })
            sum += getSumFromString(number, "\n");

        } else {
            sum += Number(number);
        }

    });
    return sum;
}

/**
 * Return true if given string has only numeric value
 * @param {string} str 
 * @returns {boolean}
 */
const containsOnlyDigits = (str) => {
    return /^\d+$/.test(str);
}

export default add;
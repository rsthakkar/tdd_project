'use strict'

let negativeNumbers = [];

/**
 * Return sum of separated numbers in string
 * @param {string} numbers
 * @returns {number} 
 */
const add = (numbers) => {
    // reset negative numbers due to closures and to clean old values
    negativeNumbers = [];

    let separator = ',';
    if (numbers.startsWith("//")) {
        // there is delimiter in this
        separator = numbers.substring(
            numbers.indexOf("//") + 2,
            numbers.indexOf('\n')
        );

        // remove the delimiter string from numbers string
        let delimieterArr = numbers.split("\n");
        delimieterArr.shift();
        numbers = delimieterArr.join("\n");
    }
    

    const total = getSumFromString(numbers, separator);
    
    if (negativeNumbers.length > 0) {
        throw new Error("negative numbers not allowed " + negativeNumbers.join(','));
    }
    return total;
};

/**
 * Return sum of numbers wihtin string with dynamic separator
 * @param {string} numbers 
 * @param {string} separator 
 * @returns {number}
 */
const getSumFromString = (numbers, separator) => {
    let numbersArr = numbers.split(separator);
    let result = separator === '*' ? 1 : 0;
    numbersArr.map((number) => {

        if (number && !containsOnlyDigits(number) && number.includes('\n')) {
            result += getSumFromString(number, "\n");

        } else {
            if (number < 0) {
                negativeNumbers.push(number); 
            }

            if (separator === '*') {
                result *= Number(number)
            } else {
                result += Number(number);
            }

        }

    });
    return result;
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
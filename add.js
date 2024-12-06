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
    let sum = 0;
    numbersArr.map((number) => {

        if (number && !containsOnlyDigits(number) && number.includes('\n')) {
            // initially added support for new line using map but later to reuse the same sum logic used recursion
            // let numbersArrWithNewLine = number.split("\n");
            // numbersArrWithNewLine.map((number) => {
            //     sum += Number(number);
            // })
            sum += getSumFromString(number, "\n");

        } else {
            if (number < 0) {
                negativeNumbers.push(number); 
            }
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
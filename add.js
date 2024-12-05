'use strict'

/**
 * Return sum of comma separated numbers
 * @param {string} numbers
 * @returns {number} 
 */
const add = (numbers) => {
    let numbersArr = numbers.split(',');
    let sum = 0;
    numbersArr.map((number) => {
        sum += Number(number);
    });
    return sum;
};

export default add;
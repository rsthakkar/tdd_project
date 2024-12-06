'use strict'

/**
 * Return sum of comma separated numbers
 * @param {string} numbers
 * @returns {number} 
 */
const add = (numbers, separator = ',') => {
    let numbersArr = numbers.split(separator);
    let sum = 0;
    numbersArr.map((number) => {

        if (number && !containsOnlyDigits(number)) {
            // initially added support for new line using map but later to reuse the same sum logic used recursion
            // let numbersArrWithNewLine = number.split("\n");
            // numbersArrWithNewLine.map((number) => {
            //     sum += Number(number);
            // })
            console.log("data coming in here")
            sum += add(number, "\n");

        } else {
            sum += Number(number);
        }

    });
    return sum;
};

function containsOnlyDigits(str) {
    return /^\d+$/.test(str);
}

export default add;
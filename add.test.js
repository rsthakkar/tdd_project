'use strict';

import add from "./add";
import { expect, test } from 'vitest'


test('empty string should return 0', () => {
    expect(add("")).toBe(0);
});

test('Single digit in string should calculate the sum', () => {
    expect(add("2")).toBe(2);
});

test('Add "2,3" and expect return value to be 5', () => {
    expect(add("2,3")).toBe(5);
});

test('Add "2,3,4,5" and expect return value to be 14', () => {
    expect(add("2,3,4,5")).toBe(14);
});



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

test('input with new line, "3\\n2,5" and expect return value to be 10', () => {
    expect(add("3\n2,5")).toBe(10);
});

test('input with new line, "3\\n2,5\\n6" and expect return value to be 16', () => {
    expect(add("3\n2,5\n6")).toBe(16);
});

test('input with new line, "3,2\\n6" and expect return value to be 11', () => {
    expect(add("3,2\n6")).toBe(11);
});

test('input with delimiter, "//;\\n1;2" and expect return value to be 3', () => {
    expect(add("//;\n1;2")).toBe(3);
});

test('input with delimiter, "//:\\n1:2\\n3" and expect return value to be 6', () => {
    expect(add("//:\n1:2\n3")).toBe(6);
});

test('Add "2,3,4,-5,5" and expect funtion to throw exception', () => {
    expect(() => add("2,3,4,-5,5")).toThrowError('negative numbers not allowed -5');
});

test('Add "2,3,4,5,-5,-6,-8" and expect funtion to throw exception', () => {
    expect(() => add("2,3,4,5,-5,-6,-8")).toThrowError('negative numbers not allowed -5,-6,-8');
});

test('input with delimiter, "//;\\n1;2;-3" expect funtion to throw exception', () => {
    expect(() => add("//;\n1;2;-3")).toThrowError('negative numbers not allowed -3');
});

test('input with delimiter, "//*\\n1*2*3" to be 6', () => {
    expect(add("//*\n3*2*3")).toBe(18);
});

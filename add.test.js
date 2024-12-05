import add from "./add";
import { expect, test } from 'vitest'


test('empty string should return 0', () => {
    expect(add("")).toBe(0)
})



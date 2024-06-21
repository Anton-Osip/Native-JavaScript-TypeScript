import {mult, splitIntoWords, sum} from "./01";

test('sum should be correct', () => {
    let a = 1
    let b = 2
    let c = 3

    const result1 = sum(a, b)
    const result2 = sum(a, c)
    const result3 = sum(c, b)

    expect(result1).toBe(3)
    expect(result2).toBe(4)
    expect(result3).toBe(5)
})

test('mult should be correct', () => {
    let a = 1
    let b = 2
    let c = 3

    const result1 = mult(a, b)
    const result2 = mult(a, c)
    const result3 = mult(c, b)

    expect(result1).toBe(2)
    expect(result2).toBe(3)
    expect(result3).toBe(6)
})

test('splitting in to words should be correct', () => {
    let split1 = 'Hello my friends'
    let split2 = 'JS it is programing language'


    const result1 = splitIntoWords(split1)
    const result2 = splitIntoWords(split2)


    expect(result1.length).toBe(3)
    expect(result1[0]).toBe('hello')
    expect(result1[1]).toBe('my')
    expect(result1[2]).toBe('friends')

    expect(result2.length).toBe(5)
    expect(result2[0]).toBe('js')
    expect(result2[1]).toBe('it')
    expect(result2[2]).toBe('is')
    expect(result2[3]).toBe('programing')
    expect(result2[4]).toBe('language')

})
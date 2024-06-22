import {createGreetingMessage, PeopleType} from "./05_01";

let people: PeopleType[] = []

beforeEach(() => {
    people = [
        {name: 'Andrew Ivanov', age: 33},
        {name: 'Alexander Petrov', age: 24},
        {name: 'Dmitry Sidorov', age: 18},
    ]
})

test('Should get array of great messages', () => {
    const messages = createGreetingMessage(people)

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe(`Hello Andrew`)
    expect(messages[1]).toBe(`Hello Alexander`)
    expect(messages[2]).toBe(`Hello Dmitry`)
})
type ManType = {
    name: string
    age: number
    lessons: number[]
}

let props: ManType

beforeAll(() => {
    props = {name: 'Anton', age: 27, lessons: [1, 2]}
})

test('', () => {
    // const age = props.age
    // const lessons = props.lessons

    const {age, lessons} = props

    expect(age).toBe(27)
    expect(lessons.length).toBe(2)
})

test('', () => {
    // const lesson1 = props.lessons[0]
    // const lesson2 = props.lessons[1]

    const [lesson1, lesson2] = props.lessons

    expect(lesson1).toBe(1)
    expect(lesson2).toBe(2)
})
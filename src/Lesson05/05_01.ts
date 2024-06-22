export type PeopleType = {
    name: string
    age: number
}

const people: PeopleType[] = [
    {name: 'Andrew Ivanov', age: 33},
    {name: 'Alexander Petrov', age: 24},
    {name: 'Dmitry Sidorov', age: 18},
]

const dimychTransformator = (man: PeopleType) => ({
    stack: ['css', 'html', 'js', 'td', 'react'],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[1],
})

const dev3 = people.map(p => {
    dimychTransformator(p)
})

const dev4 = people.map((man) => ({
    stack: ['css', 'html', 'js', 'td', 'react'],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[1],
}))

const messages = people.map(p =>
    `Hello ${p.name.split(' ')[0]}`
)

export const createGreetingMessage =(people:PeopleType[])=>{
    return people.map(p =>
        `Hello ${p.name.split(' ')[0]}`
    )
}



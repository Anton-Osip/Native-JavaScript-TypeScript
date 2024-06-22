const ages = [18, 20, 22, 1, 100, 90, 14]

export const predicate = (age: number) => {
    return age > 90
}

type CourseType = {
    title: string
    price: number
}

const courses: CourseType[] = [
    {title: 'css', price: 100},
    {title: 'js', price: 200},
    {title: 'React', price: 150}
]

const cheapPredicate = (course: CourseType) => {
    return course.price < 160
}
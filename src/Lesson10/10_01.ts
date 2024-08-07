export type UserType = {
    name: string
    hair: number
    address: {
        city: string
        house: number
    }
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = {
    books: string[]
}


export function hairdresser(u: UserType, power: number) {
    return {...u, hair: u.hair / power}
}

export function moveUser(u: UserWithLaptopType, city: string) {
    return {...u, address: {...u.address, city: city}}
}

export function upgradeUserLaptop(u: UserWithLaptopType, laptopTitle: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: laptopTitle
        }
    }
}


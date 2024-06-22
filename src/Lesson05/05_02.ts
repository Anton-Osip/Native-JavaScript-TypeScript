import {GovernmentBuildingsType, HousesType} from "../Lesson02/02_02";

export const getStreetsTitlesOfGovernmentBuildings = (buildings: GovernmentBuildingsType[]) => {
    return buildings.map(b => b.address.street.title
    )
}

export const getStreetsTitlesOfHouses = (houses: HousesType[]) => {
    return houses.map(h => h.address.street.title)
}

export const createMessages = (houses: HousesType[]) => {
    return houses.map(h=>`Hello guys from ${h.address.street.title}`)
}
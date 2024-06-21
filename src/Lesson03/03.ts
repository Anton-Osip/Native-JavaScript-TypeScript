import {StudentType} from "../Lesson02/02";
import {CityType, GovernmentBuildingsType, HousesType} from "../Lesson02/02_02";

const sum = (a: number, b: number) => {
    return a + b
}

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({id: new Date().getTime(), title: skill})
}

export const makeStudentActive = (student: StudentType) => {
    student.isActive = true
}

export const changeStudentLive = (student: StudentType, cityName: string) => {
    return student.address.city.title === cityName
}

export const changeBudget = (buildings: GovernmentBuildingsType, budget: number) => {
    buildings.budget += budget
}

export const repairHouse = (houses: HousesType) => {
    houses.repaired = true
}

export const toFireStaff = (building: GovernmentBuildingsType, staffCountToFires: number) => {
    building.staffCount -= staffCountToFires
}

export const toHireStaff = (building: GovernmentBuildingsType, staffCountToHire: number) => {
    building.staffCount += staffCountToHire
}
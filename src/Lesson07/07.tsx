import React from "react";

type ManType = {
    name: string
    age: number
    lessons: { title: number }[]
}

type PropsType = {
    title: string
    man: ManType
    car:string
}

export const ManComponent: React.FC<PropsType> = ({title, man: {name},...props}:PropsType) => {
    return <div>
        <h1>{title}</h1>
        <hr/>
        <p>{name}</p>
        <p>{props.car}</p>
    </div>
}
import {MouseEvent} from "react";

export const User = () => {

    const deleteUser = (event:MouseEvent<HTMLButtonElement>) => {
        console.log("User deleted successfully.");
    }

    const saveUser = () => {
        console.log("User saved successfully.");
    }

    const nameChanged = () => {
        console.log("Name changed");
    }

    const focusLostHandler = () => {
        console.log("Focus Lost");
    }

    return (
        <div>
            <textarea onChange = {nameChanged} onBlur = {focusLostHandler}>Dimych</textarea>

            <input type = "text"/>

            <button onClick = {deleteUser}>delete</button>
            <button onClick = {saveUser}>save</button>
        </div>)
}
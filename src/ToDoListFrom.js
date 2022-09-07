import React, { useState } from "react";

const ToDoListForm = ({addTask}) => {
    const [userInput, setUserInput] = useState('');
    const handleChange = (e) =>{
        setUserInput(e.currentTarget.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    return (
        <div> 
            <input value={userInput} onChange={handleChange}  type="text" placeholder="Enter task..."/>
            <button onClick={handleSubmit}> Submit</button>
        </div>
    )
}

export default ToDoListForm;
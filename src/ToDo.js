import React  from "react";

const ToDo = ({todo, handleToggle}) => {
    const handleClick = (e) => {
        handleToggle(e.currentTarget.id)
    }
    return (
        <div id={todo.id} name="todo" value={todo.id} className={todo.complete ? "strike" : ""}  onClick={handleClick}>
            <input id={todo.id} type="checkbox" checked={todo.complete}></input>{todo.task}
        </div>
    );
};

export default ToDo;

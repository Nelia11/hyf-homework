import { useState } from "react";
import todos from "../todos.json";

const TaskRow = ({description, deadline, deleteTask}) => {
    const [isChecked, setIsChecked] = useState(false);
    
    const doneTaskHandler = () => {
        setIsChecked(!isChecked);
    }

    return(
        <div className="row-field task">
            <div style={{textDecoration: isChecked ? "line-through" : "none"}}>{description}</div>
            <div style={{textDecoration: isChecked ? "line-through" : "none"}}>{deadline}</div>
            <input 
                type="checkbox" 
                checked={isChecked}
                onChange={doneTaskHandler}
            />
            <button onClick={() => {
                deleteTask(todos.id)
            }}>Delete</button>
        </div>
    );
};

export default TaskRow;
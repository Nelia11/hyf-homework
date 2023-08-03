import { useState } from "react";
import todos from "../todos.json";
import classes from "./TaskRow.module.css";

const TaskRow = ({description, deadline, deleteTask}) => {
    const [isChecked, setIsChecked] = useState(false);
    
    const doneTaskHandler = () => {
        setIsChecked(!isChecked);
    }

    const checkedClass = isChecked ? classes.checked : undefined;
    
    return(
        <div className="row-field task">
            <div className={checkedClass}>{description}</div>
            <div className={checkedClass}>{deadline}</div>
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
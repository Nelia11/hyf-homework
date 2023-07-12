import { useState } from "react";
import todos from "../todos.json";
import classes from "./TaskRow.module.css";
import { DateTime } from "luxon";

const TaskRow = ({description, deadline, deleteTask, isValidDescription, isValidDate}) => {
    const [isChecked, setIsChecked] = useState(false);
    const [changeDescription, setChangeDescription] = useState(description);
    const [changeDeadline, setChangeDeadline] = useState(deadline);
    const [button, setButton] = useState("Edit");

    const doneTaskHandler = () => {
        setIsChecked(!isChecked);
    };

    const checkedClass = isChecked ? classes.checked : undefined;
    
    const editTask = () => {
        setButton((prevVal) => {
            if (prevVal === "Edit") {
                return prevVal = "Update";
            } else if (prevVal === "Update") {
                return prevVal = isValidDescription(changeDescription) && isValidDate(changeDeadline) ? "Edit" : "Update";
            }
        })
    };

    const handleChangeDescription = (e) => {
        const newDescription = e.target.value;
        setChangeDescription(newDescription);
    };

    const handleChangeDeadline = (e) => {
        const today = DateTime.now().toFormat("yyyy-MM-dd");
        const inputDate = e.target.value;
        if (inputDate < today) {
            alert ("Please, select an upcoming date");
            return;
        }
        setChangeDeadline(inputDate);
    };

    return (
        <div className="row-field task">
            {button === "Edit" ? (
                <>
                    <div className={checkedClass}>{changeDescription}</div>
                    <div className={checkedClass}>{changeDeadline}</div>
                </>
            ) : (
                <>
                    <input type="text" value={changeDescription} onChange={handleChangeDescription} autoFocus/>
                    <input type="date" value={changeDeadline} onChange={handleChangeDeadline} />
                </>
            )}

            <div>     
                <input 
                    type="checkbox" 
                    checked={isChecked}
                    onChange={doneTaskHandler}
                />
            </div>
            <button onClick={editTask}>{button}</button>
            <button onClick={() => {deleteTask(todos.id)}}>Delete</button>
        </div>
    );
};

export default TaskRow;
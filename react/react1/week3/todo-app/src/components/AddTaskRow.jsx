import { useState } from "react";
const { DateTime } = require("luxon");

const AddTaskRow = ({ handleAddTodo }) => {
    const [description, setDescription] = useState("");
    const [deadline, setDeadline] = useState(DateTime.now().toFormat("yyyy-MM-dd"));

    const addTodo = (e) => {
        e.preventDefault();
        handleAddTodo(description, deadline);
        setDescription("");
        setDeadline("");
    };

    return (
        <form className="add" onSubmit={addTodo}>
            <div className="row">
                <label htmlFor="description">Description:
                    <input 
                        id="description"
                        name="description"
                        type="text"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                </label>
            </div>
            <div className="row">
                <label htmlFor="deadline">Deadline:
                    <input 
                        id="deadline"
                        name="deadline"
                        type="date"
                        value={deadline}
                        onChange={e => setDeadline(e.target.value)}
                    />
                </label>
            </div>
            <button>Add</button>
        </form>
    );
};

export default AddTaskRow;
import { useState } from "react";

const AddTaskRow = ({handleAddTodo}) => {
    const [description, setDescription] = useState("");
    const [deadline, setDeadline] = useState("");

    const addTodo = (e) => {
        e.preventDefault();
        handleAddTodo(description, deadline);
        setDescription("");
        setDeadline("");
    }
    return (
        <form className="row-field add" onSubmit={addTodo}>
            <div>
                <input 
                type="text"
                value={description}
                onChange={e => setDescription(e.target.value)}
                required
                />
            </div>
            <div>
                <input 
                type="text"
                value={deadline}
                onChange={e => setDeadline(e.target.value)}
                />
            </div>
            <button>Add</button>
        </form>
    );
};

export default AddTaskRow;
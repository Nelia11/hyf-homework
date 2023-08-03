import TaskRow from "./TaskRow";

const TableList = ({todos, deleteTask}) => {
    return (
        <>
            {todos.length === 0 
            ? (<p>No tasks found</p>) 
            : (todos.map((todo) => 
            <TaskRow 
            description={todo.description} 
            deadline={todo.deadline} 
            key={todo.id} 
            deleteTask={() => deleteTask(todo.id)}
            />
            ))} 
        </>
    );
};

export default TableList;
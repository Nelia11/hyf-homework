import TaskRow from "./TaskRow";
import FancyBorder from "./FancyBorder"

const TableList = ({todos, deleteTask, isValidDescription, isValidDate, isLoading}) => {
    return (
        <>

            {isLoading ? 
            (<div>Loading...</div>) 
            : todos.length === 0 ?
            (<p>No tasks found</p>) 
            : (todos.map((todo) => 
            <FancyBorder key={todo.id} >
                <TaskRow 
                    description={todo.description} 
                    deadline={todo.deadline}
                    deleteTask={() => deleteTask(todo.id)}
                    isValidDescription={isValidDescription}
                    isValidDate={isValidDate}
                />
            </FancyBorder>
            ))} 
        </>
    );
};

export default TableList;

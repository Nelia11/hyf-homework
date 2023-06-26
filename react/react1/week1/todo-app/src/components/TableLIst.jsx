import TaskRow from "./TaskRow";

const TableList = ({todos}) => {
    return (
        <>
            {todos.map((todo) => 
                <TaskRow 
                description={todo.description} 
                deadline={todo.deadline} 
                key={todo.id} 
                />
            )}
        </>
    );
};

export default TableList;
const TaskRow = ({description, deadline}) => {
    return(
        <div className="row-field task">
            <div>{description}</div>
            <div>{deadline}</div>
        </div>
    );
};

export default TaskRow;
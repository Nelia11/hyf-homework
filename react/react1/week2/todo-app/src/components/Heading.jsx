import Subheading from "./Subheading";

const Heading = ({todos}) => {
    const count = todos.length;
    let subheading;
    const noun = count > 1 ? "tasks" : "task";
    subheading = count + " " + noun;
    return (
        <>
            <h1>Todo App</h1>
            <Subheading subheading={subheading}/>
        </>
    );
};

export default Heading;
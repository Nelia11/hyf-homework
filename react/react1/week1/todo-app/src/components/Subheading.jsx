const Subheading = ({todos}) => {
    const count = todos.length;
    let subheading;
    if (count > 0) {
        const noun = count > 1 ? "tasks" : "task";
        subheading = count + " " + noun;
    }
    return (
        <h2>You have: {subheading}</h2>
    );
};

export default Subheading;
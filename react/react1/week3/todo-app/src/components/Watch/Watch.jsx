import { useState, useEffect } from "react";
import classes from "./Watch.module.css"

const Watch = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount((prev) => prev + 1)
        }, 1000);
    }, [count]);

    const noun = count >= 2 ? "seconds" : "second";

    return (
        <div className={classes.counter}>
            You have spent {count} {noun} on this website
        </div>
    );
};

export default Watch;
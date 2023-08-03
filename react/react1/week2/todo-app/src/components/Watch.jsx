import { useState, useEffect } from "react";

const Watch = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount((prev) => prev + 1)
        }, 1000);
    }, [count]);

    const noun = count === 1 ? "second" : "seconds";

    return (
        <>
            You have spent {count} {noun} on this website
        </>
    );
};

export default Watch;
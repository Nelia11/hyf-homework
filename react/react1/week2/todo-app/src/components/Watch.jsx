import { useState, useEffect } from "react";

const Watch = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount((prev) => prev + 1)
        }, 1000);
    }, [count]);

    const noun = count >= 2 ? "seconds" : "second";

    return (
        <>
            You have spent {count} {noun} on this website
        </>
    );
};

export default Watch;
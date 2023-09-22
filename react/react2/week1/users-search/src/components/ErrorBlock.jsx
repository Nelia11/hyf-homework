import { useContext } from "react";
import { ErrorsContext } from "../context/ErrorsContext";

const ErrorBlock = () => {
    const error = useContext(ErrorsContext);
    return (
        <>
           {error} 
        </>
    );
};

export default ErrorBlock;
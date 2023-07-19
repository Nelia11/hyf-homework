import { useContext } from "react";
import { UsersContext } from "../../context/UsersContext";
import "./SearchInput.css";

const SearchInput = ({fetchUsers}) => {
    const {query, setQuery} = useContext(UsersContext);

    const handleInput = (e) => {
        const currentValue = e.target.value;
        fetchUsers({ username: currentValue });
        setQuery(currentValue);
      };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        fetchUsers({ username: query });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                onChange={handleInput} 
                value={query} 
                placeholder="Username"
                className="srch-input"
            />
        </form>
    );
};

export default SearchInput;
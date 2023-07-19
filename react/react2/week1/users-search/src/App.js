import { useState } from 'react';
import './App.css';
import SearchInput from "./components/SearchInput/SearchInput";
import { UsersContext } from './context/UsersContext';
import { LoadingContext } from './context/LoadingContext';
import { ErrorsContext } from './context/ErrorsContext';
import Results from './components/Results';
import Title from './components/Title';

function App() {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  const fetchUsers = async ({ username }) => {
    setErrors(null);
    try {
      setIsLoading(true)
      const data = await fetch(`https://api.github.com/search/users?q=${username}`);
      if (data.status !== 200) {
        const errorRes = await data.json();
        const errorMsg = errorRes.message || "Unexpected error";
        setErrors(errorMsg);
      } else {
        const result = await data.json();
        setUsers(result.items);
      }
      setIsLoading(false);
    } catch (error) {
      setErrors(error.message);
      setIsLoading(false);
    }
  }

  return (
    <div className="App">
      <Title />
      <UsersContext.Provider value={{ query, setQuery, users, setUsers }}>
        
        <SearchInput fetchUsers={fetchUsers}/>

        <LoadingContext.Provider value={isLoading} >
        <ErrorsContext.Provider value={errors} >
          <Results />
        </ErrorsContext.Provider>
        </LoadingContext.Provider>

      </UsersContext.Provider>
    </div>
  );
}

export default App;
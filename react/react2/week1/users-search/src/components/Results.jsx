import { useContext } from 'react';
import UserFound from './UserFound';
import Loader from './Loader/Loader';
import { UsersContext } from '../context/UsersContext';
import { LoadingContext } from '../context/LoadingContext';
import { ErrorsContext } from '../context/ErrorsContext';
import ErrorBlock from './ErrorBlock';
import NotFound from './NotFound';

const Results = () => {
    const {users} = useContext(UsersContext);
    const isLoading = useContext(LoadingContext);
    const errors = useContext(ErrorsContext);

    return (
        <div style={{display:"grid", placeItems: "center"}}>
            {
                isLoading ? (
                    <Loader />
                ) : errors ? (
                    <ErrorBlock />
                ) : users.length === 0 ? (
                    <NotFound />
                ) : ( users.map((user) => (<UserFound user={user} key={user.id} />))
                )
            }
        </div>
    );
};

export default Results;
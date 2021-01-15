import react from 'react';
import { Link, NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="not-found">

            <p>
                <h1 className="display-1"> Page Not Found</h1> <br />
                <NavLink className="nav-link" aria-current="page" exact to="/">Go to home</NavLink>

            </p>

        </div>

    )
}

export default NotFound;
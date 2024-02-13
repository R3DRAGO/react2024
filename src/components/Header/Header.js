import css from './Header.module.css'
import {Link, NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to={'/users'}>User</NavLink>
            <NavLink to={'/comments'}>Comments</NavLink>
        </div>
    );
};

export {Header};
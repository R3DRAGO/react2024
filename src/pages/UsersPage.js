import {Users} from "../components/UsersContainer/Users";
import {Outlet} from "react-router-dom";
import css from '../components/style/UsersPage.module.css'

const UsersPage = () => {
    return (
        <div className={css.display}>
            <Users/>
            <Outlet/>
        </div>
    );
};

export {UsersPage};
import React from 'react'
import { NavLink } from 'react-router-dom'
import style from '../navigation/Navigation.module.css'

const Navigation = () => {
    return (
        <>
            <ul className={style.navbar}>
            <li className={style.item}>
                    <NavLink activeClassName={style.activeLink} to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/movies">Movies</NavLink>
            </li>
            </ul>
            </>
    );
}

export default Navigation;
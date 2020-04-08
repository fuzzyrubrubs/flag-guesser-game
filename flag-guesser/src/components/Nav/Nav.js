import React from 'react';
import classes from './Nav.module.css';
import { NavLink } from 'react-router-dom';

const Nav = () => (
    <div className={classes.nav}>
        <ul className="list">
            <li><NavLink to="/flag">Flag Game</NavLink></li>
            <li><NavLink to="/word" activeClassName="active-word">Word Game</NavLink></li>
        </ul>
    </div>
)

export default Nav;
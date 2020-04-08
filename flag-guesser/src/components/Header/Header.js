import React from 'react';
import classes from './Header.module.css';

const Header = () => {

    return (
        <div className={classes.Header}>
            <h1 className={classes.text}>Pick a Flag</h1>
        </div>
    )
}

export default Header;
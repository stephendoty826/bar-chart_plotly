
import React from 'react'
import {Link} from 'react-router-dom';

function Header() {
    return (
        <>
            <Link to="/">Home Page</Link>
            &nbsp;
            <Link to="sample">Redux Button</Link>
        </>
    )
}

export default Header

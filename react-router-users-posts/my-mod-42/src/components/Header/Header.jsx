import React from 'react';
import { Link, NavLink } from 'react-router';

const Header = () => {
    return (
        <div>
            <h2>This is header</h2>
            <nav>
                {/* <a href="/">Home</a> */}
                {/* this is root path and root path name */}
                {/* <a href="/moviles">Moviles</a> */}
                {/* this is moviles path(spelling needs to ve perfect to that specific path name) and path name  */}
                {/* <a href="/laptops">Laptops</a>
                <a href=""></a> */}

                {/* <Link className='mr-2.5' to="/">Home</Link>
                <Link className='mr-2.5' to="/moviles">Moviles</Link>
                <Link className='mr-2.5' to="/laptops">Laptops</Link>
                <Link className='mr-2.5' to="/">Home</Link> */}
                {/* link is a router component to stop reload the links  */}


                <NavLink className='mr-2.5' to="/">Home</NavLink>
                <NavLink className='mr-2.5' to="/moviles">Moviles</NavLink>
                <NavLink className='mr-2.5' to="/laptops">Laptops</NavLink>
                <NavLink className='mr-2.5' to="/users">Users</NavLink>
                <NavLink className='mr-2.5' to="/users2">Users2</NavLink>
                <NavLink className='mr-2.5' to="/posts">Posts</NavLink>
                {/*
                *NavLink,Link,<a> are used to stop putting the pathname in the URL manually...these helps to load component elements just vy clicking..
                
                NavLink is also a router class which shows the active element means if Home is clicked it shows the home is active..  
                *we will mostly use NavLink
                */}
            </nav>
        </div>
    );
};

export default Header;
import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';
const navigationData = [
    {
        name: "Home",
        path: "/home",
        id: 1
    },
    {
        name: "About Us",
        path: "/about-us",
        id: 2
    },
    {
        name: "Services",
        path: "/services",
        id: 3
    },
    {
        name: "Contact",
        path: "/contact",
        id: 4
    },
    {
        name: "Blog",
        path: "/blog",
        id: 5
    }
];






const NavVar = () => {
    const [open, setOpen] = useState(false);
    const links = navigationData.map(route => <Link route={route}></Link>);/*Can assign a map through array of objects to a variavle
     
    *here a seperate component is created to access the navigationData elements dynamically and map is done and map variavle(route) is passed to the component as props  */
    return (
        // <nav>
        // <ul className='flex gap-4 justify-center bg-slate-400 p-4 text-white font-bold'>
        //     <li><a href="/">Home</a></li>
        //     <li><a href="/">Avout</a></li>
        //     <li><a href="/">Vlog</a></li>


        // </ul>
        // </nav>

        <nav className='flex justify-between items-center bg-blue-950 p-4 text-amber-700 font-bold mx-4 '>


            <span onClick={() => setOpen(!open)} className='flex gap-2'>
                {
                    open ? <X className='md:hidden'></X>
                    : <Menu className='md:hidden'></Menu>
                }{/* for togling setOpen value is set to !open means in every click it will change the current value

                    *inside the curly braces toggling is done vy ternary operator and direct components are used instead of any string or text
                
                * this menu and X are for Lucide icon
            and here it is hidden for medium devices and can apply tailwind classes to those components*
                */}

                <ul className= {`md:hidden absolute bg-amber-400 ${open ? 'top-10' : '-top-50' } duration-1000`}>
                    {/* this means here items from this links variavle initialy staying at minus(-)top 50 avsolute position and it moves from there to top-10(10px from top) when the open value turn true in clicking and duration is 1000
                    
                    *here md:hidden vecause in medium devices it will be hidden and this is only for small devices
                    */}
                    {
                        links
                    }{/* these variavles like links must have to ve declared inside {} */}
                </ul>


                <h3>My NavVar</h3>
            </span>
            <ul className=' hidden md:flex gap-3 font-bold'>
                {/* this means vy default this will ve hidden and in medium devices it will ve shown with a flex  */}

                {
                    links

                }
                

            </ul>
            <button>Sign In</button>

            {/* <ul className='flex gap-4 justify-center bg-slate-400 p-4 text-white font-bold'>
                {
                    navigationData.map(route => <li><a href={route.path}>{route.name}</a></li>)
                }
            </ul> */}
        </nav>



    );
};

export default NavVar;
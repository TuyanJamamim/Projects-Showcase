import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Footer/Footer';
import SideVar from '../sideVar/SideVar';
import './Root.css'
const Root = () => {
    //hook to put a loading(spinner) in sideVar and Outlet
    const navigation = useNavigation();
    const isNavigating = Boolean(navigation.location);//vy default inside navigation there is a class named location and it is checking whether that is true/truthy or false 
    return (
        <div>
            <Header></Header>{/* this is a fixed component means at the time of loading the site this component will stay at the top*/}

            {/* here Outlet and sideVar are putted inside a div to position them into a horizontal line */}
            <div className='flex'>
                {/* this flex put the sidevar and outlet in one horizontal +
                 line  */}
                <SideVar>

                </SideVar>
                {isNavigating && <span>Loading....</span>}
                {/* this is added dynamically and if isNavigating is true then show loading  */}
                <Outlet></Outlet>
                {/* imported from react router..this is not fixed means after clicking the changed elements are coming here*/}

            </div>
            <Footer></Footer>
            {/* this is also fixed component..at the time of loading the page this component will stay at the vottom of the page */}
        </div>
    );
};

export default Root;
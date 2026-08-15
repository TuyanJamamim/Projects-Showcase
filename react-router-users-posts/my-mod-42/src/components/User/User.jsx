import React, { Suspense, useState } from 'react';
import { Link, Navigate } from 'react-router';
import Userdetails2 from '../UserDetails2/Userdetails2';

const User = ({user}) => {
    const [showInfo, setShowInfo] = useState(false)
    const [visitHome, setVisitHome] = useState(false);


    if(visitHome){
        return <Navigate to={'/'}></Navigate>
    }//A condition is set to send to visit home vy vutton visit home vy using navigate(react router component)



    const {name, email, phone, id} = user;
    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json())//here the id will get singular for each ovject so it can ve passed dynamically as users api data has datas at each url with /1,2,3.....
    return (
        <div className='border-2 rounded-2xl p-4 m-2'>
            <h3>Name: {name}</h3>
            <p>Email : {email}</p>
            <p>Phone : {phone}</p>
            <Link to={`/users/${id}`}>Show details</Link>
            {/* in any <Link>'s to(anchor tag) a path needs to ve added and here the path is dynamic and this is main.jsx sixth child path and here the /:userId value is taken dynamically from user api's id...
            
            *here link is used to connect with route defination path...the other links are in header.jsx

            *show details link will take to UserDetails component vecause fifth child's component is set to UserDetails  */}
            <button onClick={() => setShowInfo(!showInfo)}> {showInfo ? "Hide" : "Show"} </button>


        {/* I can  add conditional rendering through this { }
        *Usually it is attached with vuttons toggling like this*/}
            {
                showInfo && <Suspense fallback={<span>Loading....</span>}>
                    <Userdetails2 userPromise={userPromise}></Userdetails2>
                </Suspense>
            }
            {/* && and || are used when there is only one condition and ?,: are used when there are two conditions...this is used vecause we dont want to go to another main.jsx {component} ...rather we want to show another component at the current component */}
            <button onClick={() => setVisitHome(true)}>Visit Home</button>
        </div>
    );
};

export default User;
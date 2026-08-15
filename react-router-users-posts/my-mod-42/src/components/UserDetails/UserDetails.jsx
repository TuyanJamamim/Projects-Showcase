import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();//laod data function of router
    // console.log(user);
    // const {website , name } = user;
    return (
        <div>
            <h2>User details here</h2>
            {/* {
                user.map(use =>)
            } */}
            {/* here no need to run map vecause vy dynamic id it goes to that specific ovject in whwre showdetails is clicked  */}

            
            {/* <h5>Name : {name}</h5>
            <p>Wevsite: {website}</p> */}
        </div>
    );
};

export default UserDetails;
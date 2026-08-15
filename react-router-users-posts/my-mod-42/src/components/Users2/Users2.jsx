import React from 'react';
import { use } from 'react';

const Users2 = ({userPromise}) => {
    const users = use(userPromise)
    console.log( 'user 2 data' , users);
    return (
        <div>
            <h2>This is user2</h2>
        </div>
    );
};

export default Users2;
import React, { use } from 'react';

const Userdetails2 = ({userPromise}) => {
    const {name, username} = use(userPromise);
    

    return (
        <div>
            <p>User Name : {name}</p>
        </div>
    );
};

export default Userdetails2;
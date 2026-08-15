import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetails = () => {
    const postD = useLoaderData()
    const {body,userId} = postD
    //onclick hook
    const navigate = useNavigate();
    return (
        <div className='border-4 border-green-800'>
            <h2 className='text-3xl text-yellow-300'>userId is : {userId}</h2>
            <p className='text-red-500'>
                body is: {body}
            </p>
            <button onClick={() => navigate(-1)}>Go Back</button>
            {/* here navigate(-1) means it will go to the previous(-1) page */}
        </div>
    );
};

export default PostDetails;
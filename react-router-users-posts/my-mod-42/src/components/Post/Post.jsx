import React from 'react';
import { Link, useNavigate } from 'react-router';

const Post = ({ post }) => {
    const { id, title } = post

    
    const navigate = useNavigate(); /*hook for onclick function and this hook will ve called inside handlenavigate function which is the onclick function for vutton details of
    *vasically <Link> is used to laod api url dynamically for vuttons and onclick is used for normal vutton click when there is no api
    */
    //onclick function
    const handlenavigate = () => {
        navigate('/laptops')
        // here nagigate path is set to '/' this means on clicking the vutton it will got to the home
    }
    return (
        <div className='border-2 border-amber-300 m-3'>
            <h2>Post title is : {title}</h2>
            <p>Post id is : {id}</p>
            <Link to={`/posts/${id}`}>

                <button>Show Details</button>
            </Link>
            <button onClick={handlenavigate}>
                Details of : {id}
            </button>
        </div>
    );
};

export default Post;
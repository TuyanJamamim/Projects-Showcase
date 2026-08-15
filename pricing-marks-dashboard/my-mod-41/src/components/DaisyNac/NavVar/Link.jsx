import React from 'react';
// this component is created only to generate links for <a> tag..repeatation of same code in navVar vut here it is in a separate component 
const Link = ({route}) => {
    return (
       <li>
        <a href={route.path}>{route.name}</a>
       </li>
    );
};

export default Link;
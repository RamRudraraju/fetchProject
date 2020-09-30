import React from 'react';
import PropTypes from 'prop-types';

// 
const FetchItem = (props) => {

        const{ id, listId, name } = props.user; // Destructuring // this.state

        return ( 
                <tr>
                    <td>{id}</td>
                    <td>{listId}</td>
                    <td>{name}</td>
                </tr>
        )  
    
} 

FetchItem.prototype = {
    user: PropTypes.object.isRequired,
}


export default FetchItem

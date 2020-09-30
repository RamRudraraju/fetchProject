import React from 'react';
import FetchItem from './FetchItem'; //6*
import Spinner from '../Spinner';
import PropTypes from 'prop-types';

const Users = (props) => {
    
    console.log(" --List-- ");
    console.log("Props.users : ", props.users);

      if(props.loading){
          return <Spinner />;
      }
     else {
        return (

            <center>
            <table>
                     <th>id</th>
                     <th>Listid</th>
                     <th>Name</th>
            <tbody>
                  {props.users.map(user => (  // Map is used to loop through each Object in the Array
                    <FetchItem key={user.id} user={user} />  
                ))}
            </tbody>

            </table>
            </center>
            
           )
    }

}

Users.prototype = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users

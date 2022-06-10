import React, { useEffect, useState }  from "react";
import { GET_ALL_USERS } from "../../common/constant";
import { useNavigate } from "react-router-dom";

const UserList = () => {

    const [users, updateUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        console.log('Get all users for UI');
        async function getAllUsers() {
            const userdetails = await fetch(GET_ALL_USERS);
            const userResponse = await userdetails.json();
            updateUsers(userResponse);
        }

        getAllUsers();

    }, []);   
    
    return <ul className="users-list">
         {users.map(user => {
             return <li className="user-data">                 
                     <p className="user-id">
                        {"User ID : " + user.id}
                     </p>
                     <p className="user-name">
                        {"User Name : " + user.name}
                     </p>                 
                 <button className="user-action" onClick={() => navigate(`/userdetails/${user.id}`)}> User Info </button>
             </li>
         })}    
    </ul>
}

export default UserList;
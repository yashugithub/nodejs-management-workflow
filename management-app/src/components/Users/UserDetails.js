import React, { useEffect, useState } from "react";
import { GET_USER_BY_ID } from "../../common/constant";
import { useParams } from "react-router-dom";

const UserDetails = () => {

    const [user, updateUser] = useState();
    const params = useParams();

    useEffect(() => {
        console.log('load useeffect in userdetails --------->', params.id)
        async function getUserById() {
            const userDetails = await fetch(GET_USER_BY_ID+`/${params.id}`);
            const userResponse = await userDetails.json();
            console.log('user -------------> ', userResponse)

            updateUser(userResponse);
        }

        getUserById();
    }, [params])

    return <div> {user && <div>
                    <ul>
                        <li>{user.id}</li> 
                        <li>{user.name}</li>
                    </ul>
                </div>}                
            </div>

}

export default UserDetails;
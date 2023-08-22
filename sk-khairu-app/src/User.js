import React from "react";
import {useParams} from "react-router-dom";
function User(){
    const {userId , userName , userCountry} = useParams();
    console.log(useParams());
    return (
        <>
            <h1>User Id is {userId}</h1>
            <h1>User Name is {userName}</h1>
            <h1>User Country is {userCountry}</h1>
        </>
    );
}
export default User;
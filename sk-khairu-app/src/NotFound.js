import React from "react";
import { useNavigate } from "react-router-dom";
import {useEffect} from "react";
function NotFound(){
    const navigate = useNavigate();
    useEffect(()=>{
        setTimeout(()=>{
            navigate("/");
        },2000);
    });
    return(
        <>
            <h1>OOPS URL is wrong</h1>
        </>
    );
}
export default NotFound;
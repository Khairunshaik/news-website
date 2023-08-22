import React from 'react';
import {Link} from "react-router-dom";
function Header(){
    return  (
        <>
            <h1>header component</h1>
            <ul>
                <li> 
                    <Link to="/User">User</Link>
                </li>
                <li> 
                    <Link to="/Dhoni">Dhoni</Link>
                </li>
                <li> 
                    <Link to="/Sachin">Sachin</Link>
                </li>
                <li> 
                    <Link to="/virat">Virat</Link>
                </li>
                <li> 
                    <Link to="/Shubam">Shubam</Link>
                </li>
                <li> 
                    <Link to="/car">Car</Link>
                </li>
            </ul>
            
        </>
    );
}
export default Header;
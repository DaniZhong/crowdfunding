import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Join Now</Link>
        <Link to="/createProject">Create Project</Link>
        <Link to="/createPledge">Create Pledge</Link>
        </nav>
    );
}
   
export default Nav;
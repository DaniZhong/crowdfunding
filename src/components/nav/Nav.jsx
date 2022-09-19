import React from "react";
import { Link, useLocation } from "react-router-dom";
import {useState} from 'react';
import "./Nav.css"

// function Nav() {
    const Nav = () => {
        const location = useLocation()
        const [loggedIn, setLoggedIn] = useState(!!window.localStorage.getItem('token'));
        const logOut = () => {
            window.localStorage.removeItem("token");
                setLoggedIn(false)
        }
       
        React.useEffect(() => {
            setLoggedIn(window.localStorage.getItem('token'))
        }, [window.localStorage, location]
        
        )
        

    return (
        <div>
            <nav className="nav">
                <div id="siteName">
                    <h5>Smiles for All</h5>
                </div>
                <div id="navLink">
                    
                     <Link className="nav-link" to="/"><button id="navButton" type="submit">Home</button></Link>
                        {loggedIn ?  
                            <Link to="/createProject" ><button id="navButton" type="submit">New Project</button></Link>:null
                        }
                        {loggedIn ? (<Link to = "/" onClick={logOut}><button id="navButton" type="submit">Sign out</button></Link>) :
                            <Link to="/login" ><button id="navButton" type="submit">Login</button></Link>
                        }
                        {!loggedIn ?   
                            <Link to="/signup" ><button id="navButton" type="submit">Join now</button></Link>:null
                        }
                
                </div>
            </nav>
        </div>
    )
};



export default Nav;






// import React from "react";
// import { Link } from "react-router-dom";

// function Nav() {
//     return (
//         <nav>
//         <Link to="/">Home</Link>
//         <Link to="/login">Login</Link>
//         <Link to="/signup">Join Now</Link>
//         <Link to="/createProject">Create Project</Link>
//         <Link to="/createPledge">Create Pledge</Link>
//         </nav>
//     );
// }
   
// export default Nav;
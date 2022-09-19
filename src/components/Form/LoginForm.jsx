import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FormComponent.css";
import "../FormInput/FormInput.css";

function LoginForm() {
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });
    const navigate = useNavigate();
    
    const handleChange = (e) => {
        const { id, value } = e.target;
        setCredentials((prevCredentials) => ({
        ...prevCredentials,
        [id]: value,
        }));
    };

    const postData = async () => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}api-token-auth/`,
        {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
        }
        );
        return response.json();
    }

    

    const handleSubmit = (e) => {
        e.preventDefault();
        if (credentials.username && credentials.password) {
        postData().then((response) => {
        window.localStorage.setItem("token", response.token);
        console.log(response)
        navigate("/");

        });
        }
    };

    return (
    <div className="FormComponent">
        <form>
        <h1>Login</h1>   
        <div className="formInput">
            <label htmlFor="username">Username:</label>
            <input
                type="text"
                id="username"
                placeholder="Enter username"
                onChange={handleChange}
            />
        </div>
        <div className="formInput">
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                placeholder="Password"
                onChange={handleChange}
            />
        </div >
            <button type="submit" onClick={handleSubmit}>
                Login
             </button>
    </form>

    </div>    
    
    );
}

export default LoginForm;
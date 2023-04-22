import React from "react";
import { Link } from "react-router-dom";

function LogIn(){
    return(
        <>
        <h1>Log in</h1>
        New user?
        <Link to="/create">
            Create Account
        </Link>
        </>
    )
}

export default LogIn
import React from "react";
import { Link } from "react-router-dom";
import LogIn from "./login";

function CreateAccount(){
    return(
        <>
        <h1>Create Account</h1>
        <Link to="/login">
            Login instead
        </Link>
        </>
    )
}

export default CreateAccount
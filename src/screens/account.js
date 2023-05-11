import React, { useEffect, useState } from "react";
import AccountTopSection from "./myaccount/accountTopSection";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import PrivateRoute from "../PrivateRoute";
import AccSingleView from "./myaccount/route/accSingleView";
import AccountGridView from "./myaccount/route/accGridView";
import Gala from "./myaccount/route/Gala";
import PublicRoute from "../PublicRoute";
import AccountRouteCont from "./myaccount/accountRouteCont";
import axios from "axios";

function Account() {

    const [myPosts, setMyPosts] = useState([])

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://10.0.0.106:5000/v1/posts/my-account',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${window.localStorage.getItem('token')}`
        },
    };

    useEffect(() => {
        axios.request(config)
            .then((response) => {
                console.log(response.data.results);
                setMyPosts(response.data.results)
            })
            .catch((error) => {
                console.log(error);
            });
    }, [myPosts])

    return (
        <div style={{ maxWidth: '470px', width: '100vw', margin: '0 auto' }}>
            <AccountTopSection account={myPosts} />
            <AccountRouteCont />
            <div style={{}}>

                <Link to='grid-view'></Link>
                <Link to='single-view'></Link>
                <Link to='gala-view'></Link>
            </div>
            <Outlet />
        </div>
    )
}

export default Account
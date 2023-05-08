import React from "react";
import AccountTopSection from "./myaccount/accountTopSection";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import PrivateRoute from "../PrivateRoute";
import AccSingleView from "./myaccount/route/accSingleView";
import AccountGridView from "./myaccount/route/accGridView";
import Gala from "./myaccount/route/Gala";
import PublicRoute from "../PublicRoute";
import AccountRouteCont from "./myaccount/accountRouteCont";

function Account() {
    return (
        <div style={{ maxWidth: '470px', width: '100vw', margin: '0 auto' }}>
            <AccountTopSection />
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
import React from "react";
import AccountTopSection from "./myaccount/accountTopSection";
import { Route, Routes } from "react-router-dom";
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
            <div>
                <Routes>
                    <Route path="/account/" element={<PublicRoute><AccountGridView /></PublicRoute>} />
                    <Route path="/account/" element={<PrivateRoute><AccSingleView /></PrivateRoute>} />
                    <Route path="/account/" element={<PrivateRoute><Gala /></PrivateRoute>} />
                </Routes>
            </div>
        </div>
    )
}

export default Account
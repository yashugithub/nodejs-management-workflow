import React from "react";
import UserList from "../components/Users/UserList";
import { Routes, Route } from "react-router-dom";
import UserDetails from "../components/Users/UserDetails";
import Header from "./Header";
import LeftNavigation from "./LeftNavigation"
import Footer from "./Footer"

const AppContainer = () => {

    return <div>        
        <Header />
        <div className="mgmt-body">
        <LeftNavigation />
        <Routes>
            <Route path="/userdetails/:id" element={<UserDetails />} />
            <Route path="/" element={<UserList />} />
        </Routes>
        </div>
        <Footer />
     </div>
}

export default AppContainer;
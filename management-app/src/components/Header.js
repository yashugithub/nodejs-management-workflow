import React from "react";
import { useNavigate } from "react-router-dom"

const Header = () => {

    const navigate = useNavigate();

    return <div className="managment-header">
        <h1 onClick={() => navigate('/')}> User Management</h1>
    </div>
}

export default Header;
import React, { useState } from 'react'
import './style.css'
import { useHistory } from 'react-router-dom'
import logo from '../../Images/LogoAmigoDoce2.png'

import { FiLogIn } from "react-icons/fi";


export default function Header(props) {
    const history = useHistory()

    function handleLogout() {
        localStorage.clear()
        history.push('/')
    }

    const style = {
        logo: {
            width: '60px',
            position: 'absolute',
            top: '2px',
        },
        logOut: {
            position: 'absolute',
            right: '5px',
            top: '10px'
        },

    }

    return (
        <div className="HeaderPage">
            <FiLogIn style={style.logOut} onClick={handleLogout} size={30} color={"white"}/>
            <img
                style={style.logo}
                alt="Logo"
                src={logo}
            />
        </div>
    )
}
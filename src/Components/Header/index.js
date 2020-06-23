import React, { useState } from 'react'
import './style.css'

export default function Header(props) {

    function handleLogout() {
        props.logout()
    }
    return (
        <div class="HeaderPage">
           <button onClick={handleLogout}> Fazer Logout </button>
        </div>
    )
}
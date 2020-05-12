import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function Principal() {
    const pLogin = localStorage.getItem('plogin')
    const history = useHistory()

    function handleLogout() {
        localStorage.clear()
        history.push('/')
    }

    return (
        <div>
            <h1>Bem vindo{pLogin}!</h1>
            <button onClick={handleLogout}> Fazer Logout </button>
        </div>
    )
}
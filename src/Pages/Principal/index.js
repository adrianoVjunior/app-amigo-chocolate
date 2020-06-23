import React/* , { useState } */ from 'react'
import { useHistory } from 'react-router-dom'
import BannerGrupo from '../../Components/BannerGrupo'
import Header from '../../Components/Header'
import './style.css'

export default function Principal() {
    const history = useHistory()

    function handleLogout() {
        localStorage.clear()
        history.push('/')
    }

    return (
        <div className="PrincipalContainer">
            <Header
                logout={() => handleLogout()}
            />
            <div className="Content">
                <BannerGrupo />
            </div>

        </div>
    )
}
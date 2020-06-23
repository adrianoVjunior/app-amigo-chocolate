import React from 'react'
import BannerGrupo from '../../Components/BannerGrupo'
import Header from '../../Components/Header'
import './style.css'
export default function Principal() {


    return (
        <div className="PrincipalContainer">
            <Header />
            <div className="Content">
                <BannerGrupo />
            </div>
        </div>
    )
}
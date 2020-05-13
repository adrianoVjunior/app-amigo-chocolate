import React, { Component } from 'react'
import { useHistory } from 'react-router-dom'
import api from '../../Services/api'
import { useState } from 'react'
import './style.css'
import logo from '../../Images/LogoAmigoDoce2.png'

export default function Logon() {
    const [login, setLogin] = useState('')
    const [senha, setSenha] = useState('')

    const history = useHistory()

    async function handleLogon(e) {
        e.preventDefault();
        console.log(login)
        console.log(senha)

        const data = {
            login,
            senha
        }

        try {
            const response = await api.get(`/login/${data.login}/${data.senha}`)
            console.log(response)
            localStorage.setItem('pLogin', data.login)
            history.push('/principal')
        }
        catch{
            alert("Erro ao tentar logar no sistema")
        }
    }

    return (
        <div className="LogonContainer">
            <form
                onSubmit={handleLogon}
                className="LogonForm"
            >
            <img className="Logo" src={logo} height="40%" width="100%"/>

                <image>{}</image>
                <label>Usuário</label>
                <input
                    className="LogonInput"
                    value={login}
                    onChange={e => setLogin(e.target.value)}
                />
                <label>Senha</label>
                <input
                    className="LogonInput"
                    type="password"
                    value={senha}
                    onChange={e => setSenha(e.target.value)}
                />
                <button
                    type="submit"
                    className="LogonBtn"
                >
                    Entrar
                </button>
            </form>
        </div>
    )

}
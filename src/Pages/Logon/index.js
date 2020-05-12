import React, { Component } from 'react'
import { useHistory } from 'react-router-dom'
import api from '../../Services/api'
import { useState } from 'react'

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
        <div>
            <form onSubmit={handleLogon}>
                <h1>Faça Seu login</h1>
                <input
                    placeholder="Login"
                    value={login}
                    onChange={e => setLogin(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Senha"
                    value={senha}
                    onChange={e => setSenha(e.target.value)}
                />
                <button type="submit">Entrar</button>
            </form>
        </div>
    )

}
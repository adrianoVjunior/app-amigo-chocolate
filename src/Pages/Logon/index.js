import React from 'react'
import { useHistory } from 'react-router-dom'
import api from '../../Services/api'
import { useState } from 'react'
import './style.css'
import logo from '../../Images/LogoAmigoDoce2.png'
import Loader from '../../Components/Loader'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Logon() {
    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [cadastrar, setCadastrar] = useState(false)
    const [entrar, setEntrar] = useState(true)
    const history = useHistory()

    async function resetData() {
        setUsuario('')
        setSenha('')
        setNome('')
        setEmail('')
    }
    async function handleLogon(e) {
        e.preventDefault();

        const data = {
            usuario,
            senha
        }
        try {
            setLoading(true)
            const response = await api.post(`/login`, data)
            console.log(response)
            if (response.data.auth === false) {
                setLoading(false)
                toast.error("Usuário e/ou senha incorretos")
                return
            }
            localStorage.setItem('pUsuario', data.usuario)
            setLoading(false)
            history.push('/principal')
        }
        catch{
            setLoading(false)
        }
    }
    async function handleCadastro(e) {
        e.preventDefault();

        const data = {
            nome,
            email,
            usuario,
            senha
        }

        try {
            setLoading(true)
            const response = await api.post(`/pessoa`, data)
            console.log(response.data)
            localStorage.setItem('pUsuario', data.usuario)
            setLoading(false)
            history.push('/')
        }
        catch (err) {
            let message = err.response.data.message
            console.log(message)
            toast.error(message === undefined ? "Erro ao realizar cadastro" : message)
            setLoading(false)
            history.push('/')
        }
    }

    return (
        <div className="LogonContainer">
            <div
                className="LogonForm"
            >
                <img
                    className="Logo"
                    alt="Logo"
                    src={logo}
                />
                <div className="UseType">
                    <label
                        className={entrar === true ? 'Selected' : ''}
                        onClick={() => (setEntrar(true), setCadastrar(false), resetData())}
                    >
                        Entrar
                    </label>
                    <label
                        className={cadastrar === true ? 'Selected' : ''}
                        onClick={() => (setEntrar(false), setCadastrar(true), resetData())}
                    >
                        Cadastrar
                    </label>
                </div>
                {entrar === true &&
                    <form
                        onSubmit={handleLogon}
                    >
                        <label>Usuário</label>
                        <input
                            className="LogonInput"
                            value={usuario}
                            onChange={e => setUsuario(e.target.value)}
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
                            {loading === false ?
                                'Entrar' :
                                <Loader loading={loading} />
                            }
                        </button>
                    </form>
                }
                {cadastrar === true &&
                    <form
                        onSubmit={handleCadastro}
                    >
                        <label>Nome</label>
                        <input
                            className="LogonInput"
                            value={nome}
                            onChange={e => setNome(e.target.value)}
                        />
                        <label>Email</label>
                        <input
                            className="LogonInput"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <label>Usuário</label>
                        <input
                            className="LogonInput"
                            value={usuario}
                            onChange={e => setUsuario(e.target.value)}
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
                            {loading === false ?
                                'Cadastrar' :
                                <Loader loading={loading} />
                            }
                        </button>
                    </form>
                }

            </div>
            <ToastContainer />
        </div>
    )
}
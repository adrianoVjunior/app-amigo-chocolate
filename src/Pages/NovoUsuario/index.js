import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import api from "../../services/api";
import { FiArrowLeft } from 'react-icons/fi';
import './style.css';

export default function NovoUsuario() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [carregando, setCarregando] = useState(false);

    async function handleNew(e) {
        e.preventDefault();
        const data = {
            nome,
            email,
            usuario,
            senha
        }
        console.log(data);
        try {
            setCarregando(true);
            //const response = await api.post('/aluno',data);
            setCarregando(false);
            //console.log(response);
            alert('Cadastro realizado com sucesso');

        }
        catch (err) {
            alert('Erro ao tentar logar no sistema');
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <h1>Novo aluno</h1>
                    <p>Faça seu cadastro</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                Voltar
            </Link>
                </section>
                <form onSubmit={handleNew}>
                    <input placeholder="Digite seu nome"
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                    />
                    <input type="email" placeholder="Digite seu email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input placeholder="Digite seu usuario"
                        value={usuario}
                        onChange={e => setUsuario(e.target.value)}
                    />
                    <input placeholder="Digite sua senha"
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                    />
                    <button type="submit" className="button">"Salvar"</button>
                </form>
            </div>

        </div>
    );
}
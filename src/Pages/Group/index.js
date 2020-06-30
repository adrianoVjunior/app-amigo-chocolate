import React, { useState } from 'react'
import { FiPlus } from 'react-icons/fi';
import { useEffect } from 'react';
import api from '../../Services/api'
import { ToastContainer, toast } from 'react-toastify';
import Loader from '../../Components/Loader'
import Participantes from '../../Components/Participantes'

import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

export default function Group() {

    const [grupos, setGrupos] = useState([])
    const [loading, setLoading] = useState(false)
    const [showModal, setModal] = useState(false)

    const [nomeGrupo, setNomeGrupo] = useState('')
    const [valorMin, setValorMin] = useState('')
    const [valorMax, setValorMax] = useState('')

    const style = {
        Banners: {
            display: 'flex',
            flex: 1,
            flexWrap: 'wrap',
            justifyItems: 'center',
            justifyContent: 'center',
        },
        BannerContainer: {
            width: '20vw',
            height: '25vh',
            minWidth: '150px',
            minHeight: '180px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '5px',
            padding: '10px',
            color: 'white',
            backgroundColor: 'rgba(148, 187, 233, 0.9)',
            border: '0.5px solid gray',
            boxShadow: '2px 2px 3px 0px rgba(79, 79, 79, 1)',
            margin: '5px',
            fontSize: '18px'
        },
        Header: {
            display: 'flex',
            padding: '5px',
            margin: '10px 0px 10px 0px',
            justifyContent: 'center',
            flex: 0.2
        },
        Content: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 0.8
        },
        Status: {
            marginTop: '20px',
            display: 'flex',
            textAlign: 'center',
        },
        formGrupo: {
            display: 'flex',
            flexDirection: 'column'
        },
        btnFormGrupo: {
            height: '50px',
            width: '100%',
            backgroundColor: 'rgba(198, 186, 186,1)',
            outline: 'none',
            border: '0.2px solid rgba(129, 129, 129, 0.705)',
            borderRadius: '5px',
            color: 'black',
            marginTop: '5px'
        }
    }

    async function handleCadastroGrupo() {

        const data = {
            nome: nomeGrupo,
            valorMinimo: valorMin,
            valorMaximo: valorMax,
            admin: {
                usuario: localStorage.getItem('pUsuario')
            }
        }

        try {
            setLoading(true)
            const response = await api.post(`/grupo`, data)
            console.log(response.data)
            setLoading(false)
            setGrupos(response.data)
        }
        catch (err) {
            let message = err.response.data.message
            toast.error(message === undefined ? "Erro ao cadastrar Grupo" : message)
            setLoading(false)
            setGrupos([])
        }


    }

    useEffect(() => {
        async function loadGroups() {
            const usuario = localStorage.getItem('pUsuario')
            try {
                setLoading(true)
                const response = await api.get(`/grupo/${usuario}`)
                console.log(response.data)
                setLoading(false)
                setGrupos(response.data)
            }
            catch (err) {
                let message = err.response.data.message
                toast.error(message === undefined ? "Erro ao buscar Grupos" : message)
                setLoading(false)
                setGrupos([])
            }
        }
        loadGroups()
    }, [])

    return (
        <>
            <div style={style.Banners}>
                <Participantes />
                <div>Informações</div>
            </div>
            <ToastContainer />
            <Loader loading={loading} />
            <Modal
                open={showModal}
                onClose={() => setModal(false)}
                center
                closeOnEsc={false}
                closeOnOverlayClick={false}
            >
                <form
                    style={style.formGrupo}
                    onSubmit={handleCadastroGrupo}
                >
                    <label>Nome Grupo</label>
                    <input
                        value={nomeGrupo}
                        onChange={e => setNomeGrupo(e.target.value)}
                    />
                    <label>Valor Mínimo</label>
                    <input
                        type="number"
                        value={valorMin}
                        onChange={e => setValorMin(e.target.value)}
                    />
                    <label>Valor Máximo</label>
                    <input
                        type="number"
                        value={valorMax}
                        onChange={e => setValorMax(e.target.value)}
                    />
                    <button
                        type="submit"
                        style={style.btnFormGrupo}
                    >
                        {loading === false ?
                            'Cadastrar' :
                            <Loader loading={loading} />
                        }
                    </button>
                </form>
            </Modal>
        </>
    )
}
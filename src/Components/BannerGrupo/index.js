import React, { useState } from 'react'
import { FiPlus } from 'react-icons/fi';

export default function BannerGrupo() {

    const [teste, setTeste] = useState([1, 2, 3, 4, 5, 6])

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
            boxShadow: '4px 4px 6px 0px rgba(79, 79, 79, 1)',
            margin: '5px',
        },
        Header: {
            display: 'flex',
            padding: '5px',
            margin: '10px 0px 10px 0px',
            justifyContent: 'center',
            flex:0.2
        },
        Content: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            flex:0.8
        },
        Status: {
            marginTop: '20px'
        }
    }
    return (
        <div style={style.Banners}>
            {teste.length > 0 && teste.map(t => {
                return (
                    <div
                        style={style.BannerContainer}
                        onClick={() => console.log("clicou")}
                        key={t}
                    >
                        <div style={style.Header}>
                            <span>nome do grupo</span>
                        </div>
                        <div style={style.Content}>
                            <span>10 Participantes</span>
                            <span style={style.Status}>Aguardando sorteio</span>
                        </div>
                    </div>
                )
            })}
            <div
                style={style.BannerContainer}
                onClick={() => console.log("clicou")}
            >
                <span style={{ fontSize: '20px' }}>Criar Grupo</span>
                <FiPlus size={50} />
            </div>
        </div>
    )


}
import Popup from "components/Popup/Popup";
import React, { useState } from "react";
import styled from "styled-components";


import { FaEuroSign } from 'react-icons/fa';
import { HiClipboard } from 'react-icons/hi';
import { IoIosInformationCircleOutline } from 'react-icons/io'


const TableBox = styled.div`
    &.hide{display:none;}
    overflow: auto;
    width: 100%;
    box-shadow: 3px 3px 6px #00000020;
    ul {
        display: inline-block;
        box-shadow: 0 0 6px #00000020;
        width: 100%;
        padding: 0;
        min-width: 1200px;
        min-width: ${(props) => props.minWidth};
        margin: 0;
    }
    .logs p{text-align:center;}
    .logs p:first-child{text-align:unset;}
    @media only screen and (max-width: 364px) {
        margin: 0;
        width: calc(100% + 30px);
        transform: translateX(-15px);
        .link a svg {
            font-size: 1.2em !important;
        }
        ul{
            min-width:${(props) => props.respMinWidth ? props.respMinWidth : props.minWidth};
        }
    }
`;
const TableRow = styled.li`
    &.hide {
        display: none;
    }
    &:not(:first-child){ border-bottom: 1px solid #00000008;}
    &.rowHeader {
        background: #eff3f5;
        p {
            font-weight: 600;
            color: #707070;
        }
    }
    padding-right: 100px;
    padding-left: 20px;
    height: 46px;
    display: flex;
    position: relative;
    align-items: center;
    background: #f9f9f9;
    display: flex;
    p {
        margin: 0;
        height: 46px;
        line-height: 46px;
        color: #707070;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    p[name='id'] {
        width: 140px;
        padding-left: 20px;
    }
    p[name='max'] {
        position: relative;
        width: 100%;

        a,
        button {
            border: none;
            background: none;
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            cursor: pointer;
        }
    }
    p[name='localitzacio'],
    p[name='string'] {
        width: 220px;
        padding-left: 20px;
    }
    p[name='string_s'] {
        width: 160px;
        padding-left: 20px;
    }

    p[name='popup'],
    .popup
    {
        width: 125px;
        display:flex;
        align-items:center;
        justify-content:center;

        p
        {
            width: 80%;
            background: #aa547020;
            border-radius: 36px;
            height: 30px;
            display:flex;
            align-items:center;
            justify-content:center;
            cursor: pointer;

            svg{font-size: 18px; color: #252525;}
        }

        &:hover { p{background: #aa547030;} }
        &:active { p{background: #aa547040;} }
    }
    p[name=link]
    {
        padding: 0;
        width: 95px;
        display:flex;
        align-items:center;
        justify-content:center;
    }
    p[name='info'],
    .info
    {
        width: 80px;
        display:flex;
        align-items:center;
        justify-content:center;

        svg{font-size: 1.5em; color: #508dff; cursor:pointer;}
    }

    p[name='data'] {
        width: 200px;
        padding-left: 20px;
        text-align: center;
    }
    .edit {
        position: absolute;
        right: 10px;
        text-decoration: none;
        color: #3a3878;

        display: flex;
        align-items: center;
        justify-content: center;

        height: 36px;
        border: none;
        border-radius: 5px;
        width: 80px;
        background: #e9e9ed;
        transition: 0.2s;
    }
    .edit:hover {
        background: #3a387830;
    }
    .edit:active {
        background: #3a387860;
    }

    &.rowcolored
    {
        --red: #e91e63;
        --light-red: #e91e6320;
        --light-red: #f8dce5;

        --green: #8eec8e;
        --light-green: #eff9ec;

        --yellow: #f2c40e;
        --light-yellow: #fcf4d9;

        position:relative;
        p{color: #3a3a3a;}

        &::before
        {
            content: '';
            position:absolute;
            left: 0;
            top:50%;
            transform: translateY(-50%);
            height: 80%;
            width: 6px;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
        }

        &.red{background: var(--light-red);}
        &.red::before{background: var(--red);}

        &.green{background: var(--light-green);}
        &.green::before{background: var(--green);}

        &.yellow{background: var(--light-yellow);}
        &.yellow::before{background: var(--yellow);}
    }
    @media only screen and (max-width: 740px) {
        & {
            p {
                font-size: 0.9em;
            }
            padding-left: 0;

            p[name='data'] {
                width: 180px;
            }
        }
        &.rowHeader {
            p {
                font-size: 0.9em;
            }
        }
    }
    @media only screen and (max-width: 364px) {
        & {
            p {
                font-size: 12px;
            }

            p[name='data'] { width: 150px;}
            p[name='id'] { width: 80px; }
            p[name='localitzacio'] { width: 130px; }
            p[name='string'] { width: 140px;}

            .edit {
                font-size: 0.8em;
                width: 60px;
            }
        }
        &.rowHeader {
            p {
                font-size: 12px;
            }
        }
    }
`;
const RowButtons = styled.div`
position: absolute;
right: 10px;
display:flex;
gap: 10px;
`;



function TreballadorsTable(){
    const [llista, setLlista] = useState('');
    const [element, setElement] = useState('');

    const treballadors = [
        {dni: '12345678A', name:'Marta Pujol', role:'Desenvolupador front-end', presupostos:
        [
            {id: 'pst-1234'},{id: 'pst-4321'},{id: 'pst-3412'}
        ], worksheet:[
            {id: 'wks-1234'},{id: 'wks-4321'},{id: 'wks-3412'}
        ]},
        {dni: '12345678B', name:'Pere Pons', role:'Desenvolupador back-end', presupostos:
        [
            {id: 'pst-1234'},{id: 'pst-4321'},{id: 'pst-3412'}
        ], worksheet:[
            {id: 'wks-1234'},{id: 'wks-4321'},{id: 'wks-3412'}
        ]},
        {dni: '12345678C', name:'Marc Busquets', role:'Desenvolupador front-end', presupostos:
        [
            {id: 'pst-1234'},{id: 'pst-4321'},{id: 'pst-3412'}
        ], worksheet:[
            {id: 'wks-1234'},{id: 'wks-4321'},{id: 'wks-3412'}
        ]},
    ]

    const showPopUpList = ({setLlista}, list, header) => {
        setLlista({title:header, list});
        document.querySelector('.llista').classList.remove('hide')
    }
    const popupEliminar = (dni) => {
        setElement({title:'Eliminar un treballador', descripcio:`Estas segur que vols eliminar el treballador amb dni ${dni}?`})
        document.querySelector('.eliminar').classList.remove('hide')
    }
    return(
        <>
        <TableBox className="table" minWidth='1000px' respMinWidth='720px'>
            <ul>
            <TableRow className="rowHeader">
                <p name='id'>DNI</p>
                <p name='string'>Nom</p>
                <p name='string'>Càrrec</p>
                <p name='popup'>Pressupostos</p>
                <p name='popup'>Fulls de feina</p>
            </TableRow>
            {treballadors.map((t) => (
                <TableRow>
                    <p name='id' className="rowid">{t.dni}</p>
                    <p name='string' className="rowname">{t.name}</p>
                    <p name='string' className="rowrole">{t.role}</p>
                    <div className="popup" onClick={() => showPopUpList({setLlista}, t.presupostos, 'Pressupostos')}><p><FaEuroSign/></p></div>
                    <div className="popup" onClick={() => showPopUpList({setLlista}, t.worksheet, 'Fulls de feina')}><p><HiClipboard/></p></div>
                    <RowButtons>
                        <button
                            type="button"
                            className="btnRed"
                            onClick={() => popupEliminar(t.dni)}
                        >
                            Eliminar
                        </button>
                    </RowButtons>
                </TableRow>
            ))}
            </ul>
        </TableBox>
        <Popup type='llista' element={llista}/>
        <Popup type='eliminar' element={element} />
        </>
    )
}

function PressupostosTable({hide, setElement, setHide}){
    const [eliminar, setDelete] = useState('');
    const [nota, setNota] = useState('')

    const popupEliminar = (id) => {
        setDelete({title:'Eliminar un treballador', descripcio:`Estas segur que vols eliminar el pressupost amb id ${id}?`})
        document.querySelector('.eliminar').classList.remove('hide')
    }

    const pressupost = {
        id:1234,
        idff: 1234,
        descompte: 20,
        impost:20,
        bi:'',
        total:80,
        dataEntrada: '2023-06-01',
        dataEntrega: '2023-06-08',
        feines:[
            {
                feina:'Pintar',
                id:'fna-1',
                treballador: 'Pere Pons',
                preu: 5,
                hores: 2,
                descripcio: 'Lorem Ipsum dolor sit ament.',
                total: 40,
                materials:[
                    {
                        material:"Pot pintura",
                        unitats:2,
                        preu: 5,
                        total: 10
                    },
                    {
                        material:"Pinzell",
                        unitats:2,
                        preu: 5,
                        total: 10
                    },
                    {
                        material:"Pinzell",
                        unitats:2,
                        preu: 5,
                        total: 10
                    }
                ]
            },
            {
                feina:'Pintar',
                id:'fna-2',
                treballador: 'Pere Pons',
                preu: 5,
                hores: 2,
                descripcio: 'Lorem Ipsum dolor sit ament.',
                total: 40,
                materials:[
                    {
                        material:"Pot pintura",
                        unitats:2,
                        preu: 5,
                        total: 10
                    },
                    {
                        material:"Pinzell",
                        unitats:2,
                        preu: 5,
                        total: 10
                    }
                ]
            },
            {
                feina:'Pintar',
                id:'fna-3',
                treballador: 'Pere Pons',
                preu: 5,
                hores: 2,
                descripcio: 'Lorem Ipsum dolor sit ament.',
                total: 40,
                materials:[
                    {
                        material:"Pot pintura",
                        unitats:2,
                        preu: 5,
                        total: 10
                    },
                    {
                        material:"Pinzell",
                        unitats:2,
                        preu: 5,
                        total: 10
                    },
                    {
                        material:"Pinzell",
                        unitats:2,
                        preu: 5,
                        total: 10
                    },
                    {
                        material:"Pinzell",
                        unitats:2,
                        preu: 5,
                        total: 10
                    },
                    {
                        material:"Pinzell",
                        unitats:2,
                        preu: 5,
                        total: 10
                    }
                ]
            },
        ]
    }

    const editPresupost = (pressupost) => {
        setElement(pressupost)
        setHide('hide')
    }
    const showPopupNota = (descripcio) => {
        setNota({title:'Descripció', descripcio});
        document.querySelector(".nota").classList.remove('hide');
    }

    const pressupostos = [
        {id:'pst-1234', bi:0.00, total:0.00, descripcio: 'Lorem Ipsom dolor sit amet', dataEntrada: '2023-06-01', dataEntrega: '2023-06-08'},
        {id:'pst-4321', bi:0.00, total:0.00, descripcio: 'Lorem Ipsom dolor sit amet', dataEntrada: '2023-06-01', dataEntrega: '2023-06-08'},
        {id:'pst-3412', bi:0.00, total:0.00, descripcio: 'Lorem Ipsom dolor sit amet', dataEntrada: '2023-06-01', dataEntrega: '2023-06-08'}
    ]
    return(
        <>
        <TableBox className={`table ${hide}`} minWidth='880px' respMinWidth='680px'>
            <ul>
            <TableRow className="rowHeader">
                <p name='id'>ID</p>
                <p name='data'>Entrada</p>
                <p name='data'>Entrega</p>
                <p name='popup'>Descripció</p>
            </TableRow>
            {pressupostos.map((p) => (
                <TableRow>
                    <p name='id' className="rowid">{p.id}</p>
                    <p name='data'>{p.dataEntrada}</p>
                    <p name='data'>{p.dataEntrega}</p>
                    <div className="popup" onClick={() => showPopupNota(p.descripcio)}><p><IoIosInformationCircleOutline/></p></div>
                    <RowButtons>
                        <button
                            type="button"
                            className="btnGreen"
                            style={{'--width':'75px'}}
                            onClick={() => editPresupost(pressupost)}
                        >
                            Editar
                        </button>
                        <button
                            type="button"
                            className="btnRed"
                            style={{'--width':'75px'}}
                            onClick={() => popupEliminar(p.id)}
                        >
                            Eliminar
                        </button>
                    </RowButtons>
                </TableRow>
            ))}
            </ul>
        </TableBox>
        <Popup type='nota' element={nota}/>
        <Popup type='eliminar' element={eliminar}/>
        </>
    )
}

function WorksheetTable({setElement, setHide}){
    const [llista, setLlista] = useState('');

    const pressupostos = [
        {        
            id:1234,
            idff: 1234,
            block:'pintar',
            estat: 'començat',
            dataEntrada: '2023-06-01',
            dataEntrega: '2023-06-08',
            treballadors: [
                {id:'1234567A'}
            ],
            feines:[
                {
                    feina:'Pintar',
                    id:'fna-1',
                    treballador: 'Pere Pons',
                    hores: '08:30:00',
                    descripcio: 'Lorem Ipsum dolor sit ament.',
                    materials:[
                        {
                            material:"Pot pintura",
                            unitats:2,
                            descripcio:'Lorem Ipsum dolor sit amet.'
                        },
                        {
                            material:"Pinzell",
                            unitats:2,
                            descripcio:'Lorem Ipsum dolor sit amet.'
                        },
                        {
                            material:"Pinzell",
                            unitats:2,
                            descripcio:'Lorem Ipsum dolor sit amet.'
                        }
                    ]
                },
                {
                    feina:'Pintar',
                    id:'fna-1',
                    treballador: 'Pere Pons',
                    hores: '08:30:00',
                    descripcio: 'Lorem Ipsum dolor sit ament.',
                    materials:[
                        {
                            material:"Pot pintura",
                            unitats:2,
                            descripcio:'Lorem Ipsum dolor sit amet.'
                        },
                        {
                            material:"Pinzell",
                            unitats:2,
                            descripcio:'Lorem Ipsum dolor sit amet.'
                        },
                        {
                            material:"Pinzell",
                            unitats:2,
                            descripcio:'Lorem Ipsum dolor sit amet.'
                        }
                    ]
                },
                {
                    feina:'Pintar',
                    id:'fna-1',
                    treballador: 'Pere Pons',
                    hores: '08:30:00',
                    descripcio: 'Lorem Ipsum dolor sit ament.',
                    materials:[
                        {
                            material:"Pot pintura",
                            unitats:2,
                            descripcio:'Lorem Ipsum dolor sit amet.'
                        },
                        {
                            material:"Pinzell",
                            unitats:2,
                            descripcio:'Lorem Ipsum dolor sit amet.'
                        },
                        {
                            material:"Pinzell",
                            unitats:2,
                            descripcio:'Lorem Ipsum dolor sit amet.'
                        }
                    ]
                },
            ]
        },
        {
            id:3421,
            idff: 3421,
            block:'pintar',
            estat: 'acabat',
            dataEntrada: '2023-06-01',
            dataEntrega: '2023-06-08',
            treballadors: [
                {id:'1234567A'}
            ],
            feines:[
                {
                    feina:'Pintar',
                    id:'fna-1',
                    treballador: 'Pere Pons',
                    hores: '08:30:00',
                    descripcio: 'Lorem Ipsum dolor sit ament.',
                    materials:[
                        {
                            material:"Pot pintura",
                            unitats:2,
                            descripcio:'Lorem Ipsum dolor sit amet.'
                        },
                        {
                            material:"Pinzell",
                            unitats:2,
                            descripcio:'Lorem Ipsum dolor sit amet.'
                        },
                        {
                            material:"Pinzell",
                            unitats:2,
                            descripcio:'Lorem Ipsum dolor sit amet.'
                        }
                    ]
                },
                {
                    feina:'Pintar',
                    id:'fna-1',
                    treballador: 'Pere Pons',
                    hores: '08:30:00',
                    descripcio: 'Lorem Ipsum dolor sit ament.',
                    materials:[
                        {
                            material:"Pot pintura",
                            unitats:2,
                            descripcio:'Lorem Ipsum dolor sit amet.'
                        },
                        {
                            material:"Pinzell",
                            unitats:2,
                            descripcio:'Lorem Ipsum dolor sit amet.'
                        },
                        {
                            material:"Pinzell",
                            unitats:2,
                            descripcio:'Lorem Ipsum dolor sit amet.'
                        }
                    ]
                },
                {
                    feina:'Pintar',
                    id:'fna-1',
                    treballador: 'Pere Pons',
                    hores: '08:30:00',
                    descripcio: 'Lorem Ipsum dolor sit ament.',
                    materials:[
                        {
                            material:"Pot pintura",
                            unitats:2,
                            descripcio:'Lorem Ipsum dolor sit amet.'
                        },
                        {
                            material:"Pinzell",
                            unitats:2,
                            descripcio:'Lorem Ipsum dolor sit amet.'
                        },
                        {
                            material:"Pinzell",
                            unitats:2,
                            descripcio:'Lorem Ipsum dolor sit amet.'
                        }
                    ]
                },
            ]
        },
        {
            id:4321,
            idff: 4321,
            block:'pintar',
            estat: 'començat',
            dataEntrada: '2023-06-01',
            dataEntrega: '2023-06-08',
            treballadors: [
                {id:'1234567A'}
            ],
            feines:[
                {
                    feina:'Pintar',
                    id:'fna-1',
                    treballador: 'Pere Pons',
                    hores: '08:30:00',
                    descripcio: 'Lorem Ipsum dolor sit ament.',
                    materials:[
                        {
                            material:"Pot pintura",
                            unitats:2,
                            descripcio:'Lorem Ipsum dolor sit amet.'
                        },
                        {
                            material:"Pinzell",
                            unitats:2,
                            descripcio:'Lorem Ipsum dolor sit amet.'
                        },
                        {
                            material:"Pinzell",
                            unitats:2,
                            descripcio:'Lorem Ipsum dolor sit amet.'
                        }
                    ]
                },
                {
                    feina:'Pintar',
                    id:'fna-1',
                    treballador: 'Pere Pons',
                    hores: '08:30:00',
                    descripcio: 'Lorem Ipsum dolor sit ament.',
                    materials:[
                        {
                            material:"Pot pintura",
                            unitats:2,
                            descripcio:'Lorem Ipsum dolor sit amet.'
                        },
                        {
                            material:"Pinzell",
                            unitats:2,
                            descripcio:'Lorem Ipsum dolor sit amet.'
                        },
                        {
                            material:"Pinzell",
                            unitats:2,
                            descripcio:'Lorem Ipsum dolor sit amet.'
                        }
                    ]
                },
                {
                    feina:'Pintar',
                    id:'fna-1',
                    treballador: 'Pere Pons',
                    hores: '08:30:00',
                    descripcio: 'Lorem Ipsum dolor sit ament.',
                    materials:[
                        {
                            material:"Pot pintura",
                            unitats:2,
                            descripcio:'Lorem Ipsum dolor sit amet.'
                        },
                        {
                            material:"Pinzell",
                            unitats:2,
                            descripcio:'Lorem Ipsum dolor sit amet.'
                        },
                        {
                            material:"Pinzell",
                            unitats:2,
                            descripcio:'Lorem Ipsum dolor sit amet.'
                        }
                    ]
                },
            ]
        }
]


    const editPresupost = (pressupost) => {
        setElement(pressupost)
        setHide('hide')
    }

    const showPopUpList = ({setLlista}, list, header) => {
        setLlista({title:header, list});
        document.querySelector('.llista').classList.remove('hide')
    }
    return(
        <>
        <TableBox className="table" minWidth='1200px' respMinWidth='900px'>
            <ul>
            <TableRow className="rowHeader">
                <p name='id'>ID</p>
                <p name='string'>Block</p>
                <p name='string'>Fitxa entrada</p>
                <p name='popup'>Treballadors</p>
                <p name='data'>Entrada</p>
                <p name='data'>Entrega</p>
                <p name='string'>Estat</p>
            </TableRow>
            {pressupostos.map((w) => (
                <TableRow>
                    <p name='id' className="rowid">{w.id}</p>
                    <p name='string' className="rowblock">{w.block}</p>
                    <p name='string' className="rowpressupost">{w.idff}</p>
                    <div className="popup" onClick={() => showPopUpList({setLlista}, w.treballadors, 'Fulls de feina')}><p><HiClipboard/></p></div>
                    <p name='data'>{w.dataEntrada}</p>
                    <p name='data'>{w.dataEntrega}</p>
                    <p name='string' className="rowestat">{w.estat}</p>
                    <RowButtons>
                        <button
                            type="button"
                            className="btnBlue"
                            style={{'--width':'75px'}}
                            onClick={() => editPresupost(w)}
                        >
                            Veure
                        </button>
                    </RowButtons>
                </TableRow>
            ))}
            </ul>
        </TableBox>
        <Popup type='llista' element={llista}/>
        </>
    )
}

function ComparatorTable({diferencia}){

    const comparadors = [
            { pressupost:'pst-3412', pst_total: 1.00, worksheet: 'wks-3412', wks_total: 0.95 },
            { pressupost:'pst-4321', pst_total: 1.00, worksheet: 'wks-4321', wks_total: 1.25 },
            { pressupost:'pst-3412', pst_total: 1.00, worksheet: 'wks-3412', wks_total: 0.94 },
            { pressupost:'pst-3412', pst_total: 1.00, worksheet: 'wks-3412', wks_total: 1 },
            { pressupost:'pst-3412', pst_total: 1.00, worksheet: 'wks-3412', wks_total: 0.99 },
            { pressupost:'pst-3412', pst_total: 1.00, worksheet: 'wks-3412', wks_total: 0.96 },
            { pressupost:'pst-3412', pst_total: 1.00, worksheet: 'wks-3412', wks_total: 0.90 },
            { pressupost:'pst-1234', pst_total: 1.20, worksheet: 'wks-1234', wks_total: 1.25 }
    ]


    return(
        <TableBox className="table" minWidth='750px' respMinWidth='650px'>
            <ul>
            <TableRow className="rowHeader">
                <p name='id'>Pressupost</p>
                <p name='string'>Total Pres.</p>
                <p name='string'>Full de Feina</p>
                <p name='string'>Total F.F.</p>
            </TableRow>
            {comparadors.map((c) => (
                <TableRow className="rowcolored">
                    <p name='id' className="rowpressupost">{c.pressupost}</p>
                    <p name='string'>{c.pst_total}</p>
                    <p name='string' className="rowworksheet">{c.worksheet}</p>
                    <p name='string'>{c.wks_total}</p>
                </TableRow>
            ))}
            </ul>
        </TableBox>
    )
}

function MaterialsTable(){
    const [nota, setNota] = useState('');
    const [material, setMaterial] = useState('');
    const [element, setElement] = useState('');

    const materials = [
        {id:'mat-1234', nom:'Pot pintura', preu:0.00, descripcio:'Lorem Ipsum dolor sit amet.'},
        {id:'mat-4321', nom:'Pot pintura', preu:0.00, descripcio:'Lorem Ipsum dolor sit amet.'},
        {id:'mat-3412', nom:'Pinzell', preu:0.00, descripcio:'Lorem Ipsum dolor sit amet.'}
    ]
    const showPopupNota = (descripcio) => {
        setNota({title:'Descripció del material', descripcio})
        document.querySelector(".nota").classList.remove('hide');
    }
    const editMaterial = ({m}) => {
        setMaterial({id:m.id, name:m.nom, preu:m.preu, descripcio:m.descripcio});
        document.querySelector('.material').classList.remove('hide')
    }
    const popupEliminar = (id) => {
        setElement({title:'Eliminar un material', descripcio:`Estas segur que vols eliminar el material amb id ${id}?`})
        document.querySelector('.eliminar').classList.remove('hide')
    }
    return(
        <>
        <TableBox className="table" minWidth='920px' respMinWidth='650px'>
            <ul>
            <TableRow className="rowHeader">
                <p name='id'>ID</p>
                <p name='string'>Nom</p>
                <p name='string'>Preu</p>
                <p name='popup'>Descripció</p>
            </TableRow>
            {materials.map((m) => (
                <TableRow className="rowcolored">
                    <p name='id' className="rowid">{m.id}</p>
                    <p name='string' className="rowname">{m.nom}</p>
                    <p name='string' className="rowname">{m.preu}</p>
                    <div className="popup" onClick={() => showPopupNota(m.descripcio)}><p><IoIosInformationCircleOutline/></p></div>
                    <RowButtons>
                        <button
                            type="button"
                            className="btnGreen"
                            style={{'--width':'75px'}}
                            onClick={() => editMaterial({m})}
                        >Editar</button>
                        <button
                            type="button"
                            className="btnRed"
                            style={{'--width':'75px'}}
                            onClick={() => popupEliminar(m.id)}
                        >Eliminar</button>
                    </RowButtons>
                </TableRow>
            ))}
            </ul>
        </TableBox>
        <Popup type='nota' element={nota}/>
        <Popup type='material' element={material}/>
        <Popup type='eliminar' element={element}/>
        </>
    )
}

function FeinesTable(){
    const [nota, setNota] = useState('');
    const [element, setElement] = useState('');
    const [feina, setFeina] = useState('');

    const feines = [
        {id:'fna-1234', nom:'Pintar', preu:10, descripcio:'Lorem Ipsum dolor sit amet.'},
        {id:'fna-4321', nom:'Pot pintura', preu:11, descripcio:'Lorem Ipsum dolor sit amet.'},
        {id:'fna-3412', nom:'Pinzell', preu:10, descripcio:'Lorem Ipsum dolor sit amet.'}
    ]
    const showPopupNota = (descripcio) => {
        setNota({title:'Descripció de la feina', descripcio});
        document.querySelector(".nota").classList.remove('hide');
    }
    const popupEliminar = (id) => {
        setElement({title:'Eliminar una feina', descripcio:`Estas segur que vols eliminar la feina amb id ${id}?`})
        document.querySelector('.eliminar').classList.remove('hide')
    }
    const editFeina = ({f}) => {
        setFeina({id:f.id, name:f.nom, preu:f.preu, descripcio:f.descripcio});
        document.querySelector('.material').classList.remove('hide')
    }
    return(
        <>
        <TableBox className="table" minWidth='920px' respMinWidth='650px'>
            <ul>
            <TableRow className="rowHeader">
                <p name='id'>ID</p>
                <p name='string'>Nom</p>
                <p name='string'>Preu/hora</p>
                <p name='popup'>Descripció</p>
            </TableRow>
            {feines.map((f) => (
                <TableRow className="rowcolored">
                    <p name='id' className="rowid">{f.id}</p>
                    <p name='string' className="rowname">{f.nom}</p>
                    <p name='string' className="rowname">{f.preu}</p>
                    <div className="popup" onClick={() => showPopupNota(f.descripcio)}><p><IoIosInformationCircleOutline/></p></div>
                    <RowButtons>
                        <button
                            type="button"
                            className="btnGreen"
                            style={{'--width':'75px'}}
                            onClick={() => editFeina({f})}
                        >Editar</button>
                        <button
                            type="button"
                            className="btnRed"
                            style={{'--width':'75px'}}
                            onClick={() => popupEliminar(f.id)}
                        >Eliminar</button>
                    </RowButtons>
                </TableRow>
            ))}
            </ul>
        </TableBox>
        <Popup type='nota' element={nota}/>
        <Popup type='eliminar' element={element}/>
        <Popup type='material' element={feina} feina={true}/>
        </>
    ) 
}

function LogsTable(){
    const registres = [
        {user:'Pere Pons', data:'2/4/2023', connectat:'08:01:23', inici:'9:00:52', fi:'17:01:01'},
        {user:'Pere Ponsa', data:'3/4/2023', connectat:'08:01:23', inici:'9:00:52', fi:'17:01:01'},
        {user:'Pere Ponsb', data:'4/4/2023', connectat:'08:01:23', inici:'9:00:52', fi:'17:01:01'},
        {user:'Pere Ponsc', data:'5/4/2023', connectat:'08:01:23', inici:'9:00:52', fi:'17:01:01'},
        {user:'Pere Ponsd', data:'6/4/2023', connectat:'08:01:23', inici:'9:00:52', fi:'17:01:01'},
        {user:'Pere Ponse', data:'7/4/2023', connectat:'08:01:23', inici:'9:00:52', fi:'17:01:01'},
        {user:'Pere Ponsf', data:'8/4/2023', connectat:'08:01:23', inici:'9:00:52', fi:'17:01:01'}
    ]
    return(
        <TableBox className="table" minWidth='900px' respMinWidth='750px'>
            <ul className="logs">
                <TableRow className="rowHeader">
                    <p name='string_s'>Usuari</p>
                    <p name='string_s'>Data</p>
                    <p name='string_s'>Temps connectat</p>
                    <p name='string_s'>Inici</p>
                    <p name='string_s'>Fi</p>
                </TableRow>
                {registres.map((r) => (
                    <TableRow>
                        <p name='string_s' className="rowuser">{r.user}</p>
                        <p name='string_s' className="rowdate">{r.data}</p>
                        <p name='string_s'>{r.connectat}</p>
                        <p name='string_s'>{r.inici}</p>
                        <p name='string_s'>{r.fi}</p>
                    </TableRow>
                ))}
            </ul>
        </TableBox>
    )
}

function Table({type,hide, setElement, setHide, diferencia}){
    let table;
    switch (type){
        case 'treballadors':
            table = <TreballadorsTable />
            break;
        case 'pressupostos':
            table = <PressupostosTable hide={hide} setElement={setElement} setHide={setHide}/>
            break;
        case 'worksheet':
            table = <WorksheetTable hide={hide} setElement={setElement} setHide={setHide}/>
            break;
        case 'comparator':
            table = <ComparatorTable diferencia={diferencia}/>
            break;
        case 'materials':
            table = <MaterialsTable />
            break;
        case 'feines':
            table = <FeinesTable />
            break;
        case 'logs':
            table = <LogsTable/>
            break;
        default:
            break;
    }

    return table;
}

export default Table;
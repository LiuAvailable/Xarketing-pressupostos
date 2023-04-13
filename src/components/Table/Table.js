import React from "react";
import styled from "styled-components";


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
            width: 100%;
            background: #aa547020;
            border-radius: 36px;
            height: 30px;
            display:flex;
            align-items:center;
            justify-content:center;
            cursor: pointer;

            svg{font-size: 1.75em; color: #252525;}
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
    return(
        <TableBox className="table">
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
                    <p name='popup'>-</p>
                    <p name='popup'>-</p>
                    <RowButtons>
                        <button
                            type="button"
                            className="btnRed"
                        >
                            Eliminar
                        </button>
                    </RowButtons>
                </TableRow>
            ))}
            </ul>
        </TableBox>
    )
}


function Table({type}){
    let table;
    switch (type){
        case 'treballadors':
            table = <TreballadorsTable />
            break;
        default:
            break;
    }

    return table;
}

export default Table;
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

    &.rowcolored
    {
        --red: #e91e63;
        --light-red: #e91e6320;

        --green: #8eec8e;
        --light-green: #8eec8e20;

        --yellow: #f2c40e;
        --light-yellow: #f2c40e20;

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

function PressupostosTable(){
    const pressupostos = [
        {id:'pst-1234', bi:0.00, total:0.00},
        {id:'pst-4321', bi:0.00, total:0.00},
        {id:'pst-3412', bi:0.00, total:0.00}
    ]
    return(
        <TableBox className="table">
            <ul>
            <TableRow className="rowHeader">
                <p name='id'>ID</p>
                <p name='string'>Base imposable</p>
                <p name='string'>Preu total</p>
            </TableRow>
            {pressupostos.map((p) => (
                <TableRow>
                    <p name='id' className="rowid">{p.id}</p>
                    <p name='string' className="rowname">{p.bi}</p>
                    <p name='string' className="rowrole">{p.total}</p>
                    <RowButtons>
                        <button
                            type="button"
                            className="btnGreen"
                            style={{'--width':'75px'}}
                        >
                            Editar
                        </button>
                        <button
                            type="button"
                            className="btnRed"
                            style={{'--width':'75px'}}
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

function WorksheetTable(){
    const worksheets = [
        {id:'wks-1234', pressupost:'pst-1234', workers:[
            {dni:'12345678A'}
        ]},
        {id:'wks-4321', pressupost:'pst-4321', workers:[
            {dni:'12345678A'}
        ]},
        {id:'wks-3412', pressupost:'pst-3412', workers:[
            {dni:'12345678A'}
        ]}
    ]
    return(
        <TableBox className="table">
            <ul>
            <TableRow className="rowHeader">
                <p name='id'>ID</p>
                <p name='string'>Pressupost</p>
                <p name='popup'>Treballadors</p>
            </TableRow>
            {worksheets.map((w) => (
                <TableRow>
                    <p name='id' className="rowid">{w.id}</p>
                    <p name='string' className="rowpressupost">{w.pressupost}</p>
                    <p name='popup'>-</p>
                    <RowButtons>
                        <button
                            type="button"
                            className="btnBlue"
                            style={{'--width':'75px'}}
                        >
                            Veure
                        </button>
                    </RowButtons>
                </TableRow>
            ))}
            </ul>
        </TableBox>
    )
}

function ComparatorTable(){

    /**
     * Function to calculate %diference and set row color.
     */
    const calculatePercentage = () => {
        const table = document.querySelectorAll('.rowcolored');
        table.forEach(row => {
            const pst = parseFloat(row.querySelector("p:nth-child(2)").textContent)
            const ff = parseFloat(row.querySelector("p:nth-child(4)").textContent)

            const percentatge = (pst-ff)/pst*100;
            
            if (percentatge >= 0.0 && percentatge <= 10.0) {
                row.classList.add('green');
              } else if (percentatge >= 11.0 && percentatge <= 30.0) {
                row.classList.add('yellow');
              } else if (percentatge > 30.0) {
                row.classList.add('red');
              }
        })
    }

    setTimeout(() => calculatePercentage(), 50);

    const comparadors = [
        {pressupost:'pst-1234', pst_total: 1.20, worksheet: 'wks-1234', wks_total: 0.20},
        {pressupost:'pst-4321', pst_total: 1.00, worksheet: 'wks-4321', wks_total: 0.95},
        {pressupost:'pst-3412', pst_total: 1.00, worksheet: 'wks-3412', wks_total: 0.85}
    ]
    return(
        <TableBox className="table">
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
    const materials = [
        {id:'mat-1234', nom:'Pot pintura', preu:0.00, descripció:'Lorem Ipsum dolor sit amet.'},
        {id:'mat-4321', nom:'Pot pintura', preu:0.00, descripció:'Lorem Ipsum dolor sit amet.'},
        {id:'mat-3412', nom:'Pinzell', preu:0.00, descripció:'Lorem Ipsum dolor sit amet.'}
    ]
    return(
        <TableBox className="table">
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
                    <p name='popup'>-</p>
                    <RowButtons>
                        <button
                            type="button"
                            className="btnGreen"
                            style={{'--width':'75px'}}
                        >Editar</button>
                        <button
                            type="button"
                            className="btnRed"
                            style={{'--width':'75px'}}
                        >Eliminar</button>
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
        case 'pressupostos':
            table = <PressupostosTable />
            break;
        case 'worksheet':
            table = <WorksheetTable />
            break;
        case 'comparator':
            table = <ComparatorTable />
            break;
        case 'materials':
            table = <MaterialsTable />
            break;
        default:
            break;
    }

    return table;
}

export default Table;
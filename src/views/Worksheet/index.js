import React, { useState } from "react";
import styled from "styled-components";

import { HiClipboard } from 'react-icons/hi';
import { BsArrowLeft } from 'react-icons/bs';

import { Link } from "react-router-dom";

import Table from '../../components/Table/Table';
import Filters from "components/Table/Filters";
import WorksheetDetails from './worksheetDetails';

const Bg = styled.div`
    margin: auto;
    width: 90%;
    padding: 4vh 2vw;
    border-radius: 30px;
    background: rgba(255,255,255,.8);
    border: 1px solid rgba(255,255,255,.2);
    border-bottom: 1px solid rgba(0,0,0,.2);
    border-right: 1px solid rgba(0,0,0,.2);
    box-shadow: 3px 3px 6px #00000020;
    min-height: 80vh;

    display:flex;
    flex-direction: column;

    @media only screen and (max-width: 460px) {
        & 
        {
            width: calc(100% + 30px);
            border-radius: 0;
            transform: translateX(-15px);
            justify-content: unset;
        }
    }
`;
const Back = styled.div`
    position: relative;
    width: 54px;
    height: 30px;
    background: #f9f9f9;
    border-radius: 30px;

    display:flex;
    align-items:center;
    justify-content:center;
    
    &:hover{background: #EEE; svg{color: #505050;}}
    
    svg{font-size: 1.2em; color: #707070;}
    a,button
    {
        position: absolute;
        width: 100%;
        height: 100%;
        cursor:pointer;
    }
    button
    {
        outline:none;
        border:none;
        background:none;
        opacity:0;
        user-select:none;
    }
    @media only screen and (max-width: 620px) {
        width: 48px;
        height: 28px;
        svg{font-size:1.1em;}
    }
    @media only screen and (max-width: 476px) { 
        width: 40px;
        height: 24px;
        svg{font-size:1em;}
    }
`;

function WorkSheetView(){

    const [hide, setHide] = useState('');
    const [element, setElement] = useState('');

    const filters = [
        {placeholder:'ID', name:'id'},
        {placeholder:'Pressupost', name:'pressupost'},
    ]

    return(
        <Bg>
            <Back>
                <BsArrowLeft/>
                <Link exact to='/private/home'/>
                {hide === 'hide' ? <button type="button" onClick={() => setHide('')}>Tornar</button> : ''}
            </Back>
            <div className="pageHeader">
                <div className="icon"> <HiClipboard/> </div>
                <div className="sectionName">
                    <h1>Fulls de feina</h1>
                    <p>Els teus fulls de feina</p>
                </div>
            </div>
            {hide !== 'hide' ?
            <>
                <Filters filters={filters}/>
                <Table type='worksheet' hide={hide} setElement={setElement} setHide={setHide}/>
            </> : ''
            }
            <WorksheetDetails hide={hide} setHide={setHide} element={element}/>
        </Bg>
    )
}

export default WorkSheetView;
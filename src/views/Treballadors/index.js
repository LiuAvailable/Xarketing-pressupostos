import React from "react";
import styled from "styled-components";

import { FaUserNurse } from 'react-icons/fa';
import { BsArrowLeft } from 'react-icons/bs';

import { Link } from "react-router-dom";

import Table from '../../components/Table/Table';
import Filters from "components/Table/Filters";

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
    a
    {
        position: absolute;
        width: 100%;
        height: 100%;
        cursor:pointer;
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
const CreateUser = styled.div`
margin: 2rem 0;

display:flex;
gap: 6px;

input, select
{
    border: none;
    outline: none;
    background: #f9f9f9;

    border-radius: 5px;
    box-shadow: 2px 2px 4px #00000010;
    height: 36px;
    width: 180px;
    padding-left:10px;
    
    color: #3a3878;
}
select
{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}


`;

function TreballadorsView(){

    const filters = [
        {placeholder:'DNI', name:'id'},
        {placeholder:'Nom', name:'name'},
        {placeholder:'Càrrec', name:'role'},
    ]

    return(
        <Bg>
            <Back>
                <BsArrowLeft/>
                <Link exact to='/private/home'/>
            </Back>
            <div className="pageHeader">
                <div className="icon"> <FaUserNurse/> </div>
                <div className="sectionName">
                    <h1>Treballadors</h1>
                    <p>Tots els treballadors</p>
                </div>
            </div>
            <CreateUser>
                <input type='text' name='dni' placeholder="DNI"/>
                <input type='text' name='name' placeholder="Nom"/>
                <select>
                    <option>Desenvolupador front-end</option>
                    <option>Desenvolupador back-end</option>
                </select>
                <button
                    type='button'
                    className="btnBlue"
                    style={{'--width':'80px'}}
                >Crear</button>
            </CreateUser>
            <Filters filters={filters}/>
            <Table type='treballadors'/>
        </Bg>
    )
}

export default TreballadorsView;
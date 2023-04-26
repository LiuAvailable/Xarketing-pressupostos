import React from "react";
import styled from "styled-components";

import { GoGraph } from 'react-icons/go';
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
const ColorLegend = styled.div`
margin: 4rem 0 1rem 0;
display:flex;
align-items:center;
justify-content:center;
gap: 2rem;

.colorBox
{
    display:flex;
    align-items:center;
    gap: 5px;
    padding: .2em 1em;
    border-radius: 5px;
    border: 1px solid transparent;
    cursor:pointer;

    &:hover{background: rgba(0,0,0,.05);}
    &.active{border: 1px solid #70707020; box-shadow: 0 3px 6px #00000010;}

    .color
    {
        height: 20px;
        width: 20px;
        border-radius: 5px;
        border: 2px solid white;
        box-shadow: 0px 1px 6px #00000020;

        &.red{background:#e91e63;}
        &.green{background:#8eec8e;}
        &.yellow{background:#f2c40e;}

        pointer-events:none;
    }

    p{margin: 0; font-size: 14px;pointer-events:none;text-align:center;}
}
@media only screen and (max-width: 726px) { 
    gap: 10px;
    .colorBox{
        padding: .2em .5em;
        p{font-size: 12px;}
    }
}
@media only screen and (max-width: 360px) { 
    gap: 4px;
    .colorBox{
        padding: .2em .2em;
        .color{
            height: 16px;
            width: 16px;
            border-radius: 4px;

        }
        p{font-size: 10px; width: 40px;}
    }
}
`;

function ComparatorView(){

    /**
     * Function to filter table by diference
     */
    const filterDiference = (event, className) => {
        const rows = document.querySelectorAll(`.rowcolored`);
        let containsActive = false;
        rows.forEach(r => {
            if(event.target.classList.contains('active')) {
                r.classList.remove('hide')
                containsActive = true;
            }else{
                r.classList.add('hide');
                if(r.classList.contains(className)) r.classList.remove('hide');
            }
        })
        document.querySelectorAll('.colorBox').forEach(f => f.classList.remove('active'))
        if(!containsActive) event.target.classList.add('active')
    }

    const filters = [
        {placeholder:'Pressupost', name:'pressupost'},
        {placeholder:'Full de feina', name:'worksheet'}
    ]
    return(
        <Bg>
            <Back>
                <BsArrowLeft/>
                <Link exact to='/private/home'/>
            </Back>
            <div className="pageHeader">
                <div className="icon"> <GoGraph/> </div>
                <div className="sectionName">
                    <h1>Comparador</h1>
                    <p>Comparador de pressupostos i fulls de feina</p>
                </div>
            </div>
            <Filters filters={filters}/>
            <ColorLegend>
                {/* eslint-disable-next-line */}
                <div className="colorBox" onClick={($event) => filterDiference($event, 'green')}>
                    <div className="color green"></div>
                    <p>Dif. 0-10%</p>
                </div>
                {/* eslint-disable-next-line */}
                <div className="colorBox" onClick={($event) => filterDiference($event, 'yellow')}>
                    <div className="color yellow"></div>
                    <p>Dif. 11-30%</p>
                </div>
                {/* eslint-disable-next-line */}
                <div className="colorBox" onClick={($event) => filterDiference($event, 'red')}>
                    <div className="color red"></div>
                    <p>Dif. +30%</p>
                </div>
            </ColorLegend>
            <Table type='comparator'/>
        </Bg>
    )
}
export default ComparatorView;
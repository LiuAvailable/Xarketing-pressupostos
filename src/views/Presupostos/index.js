import React, { useState } from "react";
import styled from "styled-components";

import { FaEuroSign } from 'react-icons/fa';
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
`;

function PressupostosView(){
    const [hideTable, setHide] = useState('');
    const filters = [
        {placeholder:'ID', name:'id'},
    ]

    const crearPressupost = () => {
        setHide('hide');
    }
    return(
        <Bg>
            <Back>
                <BsArrowLeft/>
                <Link exact to='/private/home'/>
            </Back>
            <div className="pageHeader">
                <div className="icon"> <FaEuroSign/> </div>
                <div className="sectionName">
                    <h1>Pressupostos</h1>
                    <p>Els teus pressupostos</p>
                </div>
            </div>
            <CreateUser>
                <button
                    type='button'
                    className="btnBlue"
                    style={{'--width':'140px'}}
                    onClick={() => crearPressupost()}
                >Nou pressupost</button>
            </CreateUser>
            <Filters filters={filters} hide={hideTable}/>
            <Table type='pressupostos' hide={hideTable}/>
            <CreatePresupost hide={hideTable}/>
        </Bg>
    )
}

const AddPressupostBox = styled.div`
.identificators
{
    padding: 2rem;
    display: flex;
    width: 100%;
    justify-content:space-evenly;

    .inputBox
    {
        display:flex;
        flex-direction: column;

        p{margin:0;font-size: 14px;}
        input
        {
            border:none;
            outline:none;
            box-shadow: 1px 3px 6px #00000020;

            height: 40px;
            width: 160px;
            border-radius: 5px;
            padding-left:10px;
        }
    }
}
`;
const Feina = styled.div`
position:relative;
background: white;
border-radius:15px;
box-shadow: 3px 3px 6px #00000020;
padding: 1rem 2rem;

display:flex;
flex-direction:column;

select, input, textarea
{
    width: 140px;
    height: 40px;

    border:none;
    outline:none;
    padding: 0 10px;
    border-radius: 5px;
    box-shadow: 1px 3px 6px #00000020;
    background: white;
}
.row
{
    display:flex;
    flex-direction:row;
    align-items: center;
    margin: 1rem 0;
    p{margin: 0;margin-right: 5px; font-size: 14px;}
    input{margin-right: 40px;}
}
.treballador
{
    top: 1rem;
    right:2rem;
    position:absolute;
    gap: 10px;
    p{margin: 0;font-size: 12px;}

}
textarea
{
    width: 100%;
    min-height: 80px;
    margin-bottom: 2rem;
}

.material
{
    position: relative;
    margin: 1rem 0 1rem 12rem;
    display:flex;
    flex-direction:row;
    gap: 20px;

    input[name='preuTotal']{position:absolute; right: 0;}
    input[type='number'], input[name='preuTotal']{width: 80px;}
    .inputBox{ 
        position:relative;
        p
        {
            margin: 0;
            position:absolute;
            top: -20px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 12px;
        }
    }
    .eliminar
    {
        position:absolute;
        top: 50%;
        left:-10px;
        transform:translate(-100%, -50%);
        padding: 1px 4px;
        border: 1px solid transparent;
        color: #d44e4f;
        font-size: 12px;
        border-radius: 5px;
        transition: .1s;
        &:hover{border: 1px solid #d44e4f;}
    }
}
.btnTintedGlass{font-size: 14px; margin-left: 12rem !important;}

.totals
{
    margin: 4rem 0 2rem 0;
    display:flex;
    flex-direction: row;
    justify-content: space-evenly;
    .inputBox
    {
        p{font-size: 12px; margin: 0;}
    }
}
`;
function CreatePresupost({hide}){
    let form;
    if(hide === 'hide'){
        form = (
            <AddPressupostBox>
                <div className="identificators">
                    <div className="inputBox">
                        <p>Id</p>
                        <input type='text' name='id'/>
                    </div>
                    <div className="inputBox">
                        <p>Id fulls de feina</p>
                        <input type='text' name='idff'/>
                    </div>
                </div>
                <Feina className='feina'>
                    <select>
                        <option>Feina</option>
                        <option>Pintar</option>
                    </select>
                    <input type='text' placeholder='identificador' name='id'/>
                    <div className="row treballador">
                        <p>Assignada a:</p>
                        <select>
                            <option>Treballador</option>
                            <option>Pere Pons</option>
                        </select>
                    </div>
                    <div className="row">
                        <p>Preu/hora:</p>
                        <input type='number' placeholder="preu/hora" name='preu'/>
                        <p>hores:</p>
                        <input type='number' placeholder="hores" name='hores'/>
                    </div>
                    <textarea placeholder="Descripció"></textarea>

                        <div className="material">
                            <select>
                                <option>Material</option>
                                <option>Pot pintura</option>
                                <option>Pinzell</option>
                            </select>
                            <div className="inputBox">
                                <p>unitats</p>
                                <input type='number' name='unitatsMaterial' />
                            </div>
                            <div className="inputBox">
                                <p>preu/U</p>
                                <input type='number' name='preuUnitat' />
                            </div>
                            <input type='text' name='preuTotal' readOnly/>
                            <div className="eliminar">eliminar</div>
                        </div>
                        <button type='button' className="btnTintedGlass" style={{'--width':'120px'}}>Afegir Material</button>
                        <div className="totals">
                            <div className="inputBox">
                                <p>Descompte</p>
                                <input type='text' name='descompte' />
                            </div>
                            <div className="inputBox">
                                <p>Impost</p>
                                <input type='text' name='descompte' />
                            </div>
                            <div className="inputBox">
                                <p>Base imposable</p>
                                <input type='text' name='descompte' />
                            </div>
                            <div className="inputBox">
                                <p>Preu total</p>
                                <input type='text' name='descompte' />
                            </div>
                        </div>
                </Feina>
            </AddPressupostBox>
        )
    }
    return form;
}

export default PressupostosView;
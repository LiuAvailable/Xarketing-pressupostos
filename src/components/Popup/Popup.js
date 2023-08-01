import React from "react";
import styled from "styled-components";


const PopUpBg = styled.div`
&.hide{display:none;}
position: fixed;
top: 50%;
transform: translateY(-50%);
left: 0;
width: 100vw;
height: 100vh;
backdrop-filter: blur(1px);

display:flex;
align-items:center;
justify-content:center;

z-index: 5;
`;
const PopUpBox = styled.div`
    width: 40vw;
    min-width: 520px;
    border-radius: 10px;
    background: #ececf0;
    border: 1px solid #3a387880; 
    max-height: 60vh;
    overflow:auto;
    box-shadow: 3px 3px 6px #00000020;
    transition: .3s;

    button{ margin: 0 2rem 1rem 2rem; }
    p[name='single']{margin: 1rem 2rem;}

    @media only screen and (max-width: 580px) {
        width: 100%;
        min-width: unset;
        p[name='single']{font-size: 14px;}
    }
    @media only screen and (max-width: 476px) {
        p[name='single']{font-size: 12px;}
    }
`;
const PopUpHeader = styled.div`
    position: sticky;
    width: 100%;
    height: 44px;
    background: #3a3878;
    z-index:5;
    top: 0;

    display:flex;
    align-items:center;

    p
    {
        width: calc(100% - 108px);
        padding-left: 24px;
        color: #f9f9f9;
        margin: 0;
    }
    button{margin: 0 24px;}

    @media only screen and (max-width: 580px) {p{font-size:14px}}
    @media only screen and (max-width: 476px) {
        p{font-size:12px;padding-left: 14px;}
        button{margin: 0; position:absolute; right: 14px;}
    }
`;
// hides active popup
const closePopUp = () => {
    document.querySelector('.PopupElement:not(.hide)').classList.remove('create')
    document.querySelector('.PopupElement:not(.hide)').classList.add('hide')
}

function PopupList({element}){
    return(
        <PopUpBox>
            <PopUpHeader>
                <p>{element ? element.title : ''}</p>
                <button
                    type="button"
                    className="btnGlass"
                    style={{'--width':'60px'}}
                    onClick={() => closePopUp()}
                >Tancar</button>
            </PopUpHeader>
                {element ? element.list.map((i) => (
                    <p name='single'>{i.id}</p>
                )) : ''}
        </PopUpBox>
    )
}

function PopupNota({element, btnConfirm}){
    return(
        <PopUpBox>
            <PopUpHeader>
                <p>{element ? element.title : ''}</p>
                <button
                    type="button"
                    className="btnGlass"
                    style={{'--width':'60px'}}
                    onClick={() => closePopUp()}
                >Tancar</button>
            </PopUpHeader>
                <p name='single'>{element.descripcio}</p>
                {btnConfirm ? <button type="button" className="btnBlue" style={{'--width':'120px'}}>Confirmar</button> : ''}
        </PopUpBox>
    )
}

const MaterialForm = styled.form`
    padding: 2rem;
    display:flex;
    flex-wrap: wrap;
    gap: 20px;

    input, textarea
    {
        width: 140px;
        height: 36px;
        padding-left:10px;
        border-radius: 5px;
        box-shadow: 3px 3px 6px #00000010;
        border:none;
        color: #3a3878;
    }

    input::placeholder,
    textarea::placeholder{color: #a0a0a0;}

    textarea
    {
        width: 100%;
        min-height: 72px;
    }
`;

function CrearMaterial({element, feina}){

    const closeThisPopUp = () => {
        document.querySelector(".material input[name='id']").value = '';
        document.querySelector(".material input[name='name']").value = '';
        document.querySelector(".material input[name='preu']").value = '';
        document.querySelector(".material textarea").value = ''; 

        closePopUp();
    }

    setTimeout(
    () => {
        if(element){
            document.querySelector(".material input[name='id']").value = element.id;
            document.querySelector(".material input[name='name']").value = element.name;
            document.querySelector(".material input[name='preu']").value = element.preu;
            document.querySelector(".material textarea").value = element.descripcio;
        } else {
            document.querySelector(".material input[name='id']").value = '';
            document.querySelector(".material input[name='name']").value = '';
            document.querySelector(".material input[name='preu']").value = '';
            document.querySelector(".material textarea").value = '';
        }
    },50);

    let header;
    if(feina){
        header = element ? 'Modificar una feina' : 'Crear una feina'
    } else {
        header = element ? 'Modificar un material' : 'Crear un material'
    }

    return(
        <PopUpBox>
        <PopUpHeader>
            <p>{header}</p>
            <button
                type="button"
                className="btnGlass"
                style={{'--width':'60px'}}
                onClick={() => closeThisPopUp()}
            >Tancar</button>
        </PopUpHeader>
                <MaterialForm>
                    <input type='text' name='id' placeholder="id"/>
                    <input type='text' name='name' placeholder="Nom"/>
                    <input type='number' name='preu' placeholder="Preu"/>
                    <textarea placeholder="Descripció"></textarea>
                </MaterialForm>
                <button
                    type="button"
                    className="btnBlue"
                    style={{'--width':'80px'}}
                    onClick={() => console.log('AAAAA')}
                >Crear</button>
        </PopUpBox>
    )
}

function Popup({type, element, feina}){
    let popup;
    switch(type){
        case ('llista'):
            popup = <PopupList element={element}/>
            break;
        case ('nota'):
            popup = <PopupNota element={element}/>
            break;
        case ('eliminar'):
            popup = <PopupNota element={element} btnConfirm={true}/>
            break;
        case ('material'):
            popup = <CrearMaterial element={element} feina={feina}/>
            break;
        default:
            break;
    }
    return (
        <PopUpBg className={`PopupElement hide ${type ? type : ''}`}>
            {popup}
        </PopUpBg>
    );
}

export default Popup
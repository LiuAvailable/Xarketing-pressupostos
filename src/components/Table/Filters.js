import React from "react";
import styled from "styled-components";

import { BsTrashFill } from 'react-icons/bs';

const FilterBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items:center;
    gap: 10px;
    margin: 2vh 0 1vh 0;

    .inputBox
    {
        position:relative;
        height: 36px;
        width: 160px;
        border-radius 5px;
        box-shadow: 2px 2px 4px #00000010;
        display:flex;
        align-items:center;
        background: #f9f9f9;

        p
        {
            position: absolute;
            left: 10px;
            margin: 0;
            color: #707070;
            transition: .3s;
        }
        input
        {
            position:relative;
            z-index:1;
            padding: 0 10px;
            background: transparent;
            border:none;
            outline:none;
            width: 100%;
            height: 100%;
            color: #3a3878;
        }

        &.focus
        {
            p
            {
                color: #252525;
                font-size: .85em;
                transform: translate(-6px, -30px);
            }
        }
    }
    @media only screen and (max-width: 620px) {
        &
        {
            margin: 1vh 0;
            .inputBox
            {
                width: 120px;
                p{font-size:14px; left:5px;}
                input{padding-left:5px; font-size:14px;}
            }
        }
    }
    @media only screen and (max-width: 476px) {
        &
        {
            .inputBox
            {
                margin: 10px 0;
                height: 26px;
                width: 105px;
                p{font-size:12px; left:5px;}
                input{padding-left:5px; font-size:12px;}

                &.focus{p
                    {
                        font-size:10px;
                        transform:translateY(-22px);
                    }}
            }
        }
    } 
`;

function Filters({filters}){
    const onFocus = ($event) => { $event.target.parentNode.classList.add('focus') }
    const onBlur = ($event) => { if($event.target.value === '') $event.target.parentNode.classList.remove('focus') }

    /**
     * Function to filter de table rows
     */
    const filterTable = () => {
        const rows = document.querySelectorAll('.table > ul > li:not(.rowHeader)');

        const filtres = [];
        document.querySelectorAll('.inputBox.focus input').forEach(input => {
            if(input.value !== undefined && input.value !== null){
                filtres.push({type: input.name, value:input.value})
            }
        })

        rows.forEach(r => {
            r.classList.remove('hide');

            let bool = true;
            let contador = 0;

            while(bool && contador < filtres.length){
                if(!r.querySelector(`p.row${filtres[contador].type}`)
                .textContent.toLocaleLowerCase()
                .includes(filtres[contador].value.toLocaleLowerCase())){
                    bool = false;
                    r.classList.add('hide');
                }

                /* eslint-disable-next-line */
                contador++;
            }
            

        })
    }
    
    const removeFilters = () => {
        document.querySelectorAll('.table > ul > li:not(.rowHeader)').forEach(row => row.classList.remove('hide'));

        document.querySelectorAll('.inputBox.focus').forEach(iBox => {
            iBox.classList.remove('focus');
            iBox.querySelector('input').value = '';
        })
    }


    return(
        <FilterBox>
            { filters.map((f) => (
                <div className="inputBox">
                    <p>{f.placeholder}</p>
                    <input 
                        type='text' 
                        name={f.name}
                        onFocus={($event) => onFocus($event)}
                        onBlur={($event) => onBlur($event)}
                    />
                </div>
            ))}
            <button 
                type="button" 
                className="btnBlue" 
                style={{'--width':'80px'}}
                onClick={() => filterTable()}
            >Filtrar</button>
            {/* eslint-disable-next-line */}
            <button 
                type="button" 
                className="btnRed" 
                style={{'--width':'40px'}}
                onClick={() => removeFilters()}
            ><BsTrashFill/></button>
        </FilterBox>
    )
}

export default Filters;
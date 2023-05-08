import React from "react";
import styled from "styled-components";

/* MORE STYLES IN _presupostView.scss */

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
        input, select
        {
            border:none;
            outline:none;
            box-shadow: 1px 3px 6px #00000020;

            height: 40px;
            width: 160px;
            border-radius: 5px;
            padding-left:10px;
            background:white;
        }
    }
}
@media only screen and (max-width: 760px) {
    .identificators
    {
        .inputBox
        {
            p{font-size: 12px;}
            input
            {    
                height: 36px;
                width: 140px;
            }
        }
    }
}
@media only screen and (max-width: 452px) {
    .identificators
    {
        justify-content: space-between;
        .inputBox
        {
            p{font-size: 12px;}
            input
            {    
                height: 36px;
                width: 140px;
            }
        }
    }
}
@media only screen and (max-width: 380px) {
    .identificators
    {
        padding: 1rem 0;
        justify-content: space-evenly;
        .inputBox
        {
            p{font-size: 12px;}
            input
            {    
                height: 36px;
                width: 100px;
                font-size: 12px;
            }
        }
    }
}
`;
const ButtonsExit = styled.div`
margin-top: 2rem;
display:flex;
flex-direction: row-reverse;
gap: 20px;
button{margin-left:0 !important;}
@media only screen and (max-width: 760px) {
    gap:10px;
}
`;
const NewFeina = styled.div`
display: flex;
align-items:center;
justify-content:center;
border-radius: 15px;
text-transform: uppercase;
margin: 1rem 0;
height: 4rem;

background: #A0A0A020;
border: 1px solid #A0A0A060;
backdrop-filter: blur(2px);
cursor:pointer;
color: #606060;

&:hover{background: #A0A0A030;}

@media only screen and (max-width: 760px) {
    font-size: 14px;
}
@media only screen and (max-width: 448px) {
    font-size: 12px;
}
`;

/* MORE STYLES IN _presupostView.scss */



function CreatePresupost({hide,setHide, element}){

    if(element){
        /* prepare DOM to insert data */
        setTimeout(() => {
            const feines = document.querySelectorAll(".feina");
    
            let contador = feines.length
            while(contador < element.feines.length){
                addFeina()
                contador=contador+1;
            }
        },50)
        /* insert register data */
        setTimeout(() => {
            /* identificators */
            document.querySelector(".identificators input[name='id']").value = element.id;
            document.querySelector(".identificators input[name='idff']").value = element.idff;
            document.querySelector(".identificators input[name='dataEntrada']").value = element.dataEntrada;
            /* presupost totals */
            document.querySelector("input[name='descompte']").value = element.descompte;
            document.querySelector("input[name='impost']").value = element.impost;
            document.querySelector("input[name='baseImposable']").value = element.bi;
            document.querySelector("input[name='totalPresupost']").value = element.total;

            /* feines */
            let feina = 1;
            element.feines.forEach(f => {
                document.querySelector(`.feina:nth-child(${feina}) select`).value = f.feina;
                document.querySelector(`.feina:nth-child(${feina}) input[name='id']`).value = f.id;
                document.querySelector(`.feina:nth-child(${feina}) .treballador select`).value = f.treballador;
                document.querySelector(`.feina:nth-child(${feina}) input[name='preu']`).value = f.preu;
                document.querySelector(`.feina:nth-child(${feina}) input[name='hores']`).value = f.hores;
                document.querySelector(`.feina:nth-child(${feina}) input[name='totalFeina']`).value = f.total;
                document.querySelector(`.feina:nth-child(${feina}) textarea`).value = f.descripcio;

                feina=feina+1;
            })
        }, 500)

    }

    /**
     * function to add a new task
     */
    const addFeina = () => {
        const feinaHTML = 
            `
            <button class='btnTintedGlass eliminarFeina' style="--width:80px">Eliminar</button>
            <div class='row'>
                <select>
                    <option>Feina</option>
                    <option>Pintar</option>
                </select>
                <input type='text' placeholder='identificador' name='id'/>
                <div class="treballador">
                    <p>Assignada a:</p>
                    <select>
                        <option>Treballador</option>
                        <option>Pere Pons</option>
                    </select>
                </div>
            </div>
            <textarea placeholder="Descripció"></textarea>            
            `

        const feina = document.createElement('div')
        feina.classList.add('feina');
        feina.innerHTML = feinaHTML;
        document.querySelector('.feinesBox').appendChild(feina);
        feina.querySelector(".btnTintedGlass").addEventListener('click', () => feina.remove())

    }


    const CreatePresupost = () => {
        const id = document.querySelector(".identificators input[name='id']").value;
        const idFF = document.querySelector(".identificators input[name='idff']").value;
        const dataEntrada = document.querySelector(".identificators input[name='dataEntrada']").value;
        const feines = [];

        document.querySelectorAll('.feina').forEach(f => {
            const feina = f.querySelector('select').value;
            const id = f.querySelector("input[name='id'").value;
            const treballador = f.querySelector(".treballador select").value;
            const descripcio = f.querySelector("textarea").value;

            feines.push({feina, id, treballador, descripcio})
        })

        console.log({id, idFF, dataEntrada, feines})
    }

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
                    <div className="inputBox">
                        <p>Data Entrega</p>
                        <input type='date' name='dataEntrega'/>
                    </div>
                    <div className="inputBox">
                        <p>Block feina</p>
                        <select>
                            <option>inox</option>
                            <option>ferro</option>
                            <option>pintar</option>
                        </select>
                    </div>
                </div>
                <div className="feinesBox">
                <div className='feina'>
                    <div className="row">
                        <select>
                            <option>Feina</option>
                            <option>Pintar</option>
                        </select>
                        <input type='text' placeholder='identificador' name='id'/>
                        <div className="treballador">
                            <p>Assignada a:</p>
                            <select>
                                <option>Treballador</option>
                                <option>Pere Pons</option>
                            </select>
                        </div>
                    </div>
                    <textarea placeholder="Descripció"></textarea>
                </div>

                </div>
                <NewFeina onClick={() => addFeina()}>Afegir una altre feina</NewFeina>
                <ButtonsExit>
                    <button
                        type='button'
                        className="btnBlue"
                        style={{'--width':'90px'}}
                        onClick={() => CreatePresupost()}
                    >Crear</button>
                    <button
                        type='button'
                        className="btnTintedGlass"
                        style={{'--width':'90px'}}
                        onClick={() => setHide('')}
                    >Cancelar</button>
                </ButtonsExit>
            </AddPressupostBox>
        )
    }
    return form;
}

export default CreatePresupost;
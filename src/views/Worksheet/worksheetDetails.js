import React from "react";
import styled from "styled-components";


/* MORE STYLES IN _presupostView.scss */

const AddPressupostBox = styled.div`
.identificators
{
    padding: 2rem;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 10px;
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

/* MORE STYLES IN _presupostView.scss */



function WorksheetDetails({hide,setHide, element}){

    if(element){
        /* prepare DOM to insert data */
        setTimeout(() => {
            const feines = document.querySelectorAll(".feina");

            let contador = feines.length
            while(contador < element.feines.length){
                addFeina()
                contador=contador+1;
            }
            setTimeout(() => {
                contador = 1;
                element.feines.forEach(f => {
                    const feina = document.querySelector(`.feina:nth-child(${contador})`);
                    const materials = feina.querySelectorAll(`.material`);

                    let contador2 = materials.length
                    while(contador2 < element.feines[contador-1].materials.length){
                        addMaterial({feinaElement:feina})
                        contador2 = contador2 +1;
                    }
                    contador=contador+1;
                })
            },50)
        },50)
        /* insert register data */
        setTimeout(() => {
            /* identificators */
            document.querySelector(".identificators input[name='id']").value = element.id;
            document.querySelector(".identificators input[name='idff']").value = element.idff;

            /* feines */
            let feina = 1;
            element.feines.forEach(f => {
                document.querySelector(`.feina:nth-child(${feina}) select`).value = f.feina;
                document.querySelector(`.feina:nth-child(${feina}) input[name='id']`).value = f.id;
                document.querySelector(`.feina:nth-child(${feina}) .treballador input`).value = f.treballador;
                document.querySelector(`.feina:nth-child(${feina}) textarea`).value = f.descripcio;

                /* materials */
                let material = 1;
                f.materials.forEach(m => {
                    document.querySelector(`.feina:nth-child(${feina}) .material:nth-child(${material}) select`).value = m.material;
                    document.querySelector(`.feina:nth-child(${feina}) .material:nth-child(${material}) input[name='unitatsMaterial']`).value = m.unitats;
                    document.querySelector(`.feina:nth-child(${feina}) .material:nth-child(${material}) textarea`).value = m.descripcio;
                    material = material + 1;
                })
                feina=feina+1;
            })
        }, 500)

    }

    /**
     * Function to remove a material from a task
     * @param material material to be removed
     */
    const rmMaterial = (material) => {
        material.remove()
    }

    /**
     * function to add a new task to the presupost
     * @param feina == task to add a new material
     * if feina is null, it is the first task, the one is created by default
     */
    const addMaterial = (feina) => {
        const materialHTML =
            `
                <select>
                    <option>Material</option>
                    <option>Pot pintura</option>
                    <option>Pinzell</option>
                </select>
                <div class="inputBox">
                    <p>unitats</p>
                    <input type='number' name='unitatsMaterial' />
                </div>
                <div class="inputBox">
                    <p>Descripció</p>
                    <textarea></textarea>
                </div>
                <div class="eliminar">eliminar</div>
            `
        const material = document.createElement('div')
        material.classList.add('material');
        material.innerHTML = materialHTML;

        let materialElement;

        if(feina){ // feina added manualy (!= first)
            feina.feinaElement.querySelector('.materialBox').appendChild(material)
            const materialElements = feina.feinaElement.querySelectorAll(".material");
            materialElement = materialElements[materialElements.length -1 ];
        }else{ // feina by default (== first)
            document.querySelector('.materialBox').appendChild(material);
            const materialElements = document.querySelectorAll(".feinesBox > div:nth-child(1) .material");
            materialElement = materialElements[materialElements.length -1 ];
        }

        materialElement.querySelector(".eliminar").addEventListener('click', () => rmMaterial(materialElement))
    }

    /**
     * function to add a new task
     */
    const addFeina = () => {
        const feinaHTML = 
            `
                <div class='row'>
                    <input type'text' name='feina' value='pintar' readOnly/>
                    <input type='text' placeholder='identificador' name='id' readOnly/>
                    <div class="treballador">
                        <p>Assignada a:</p>
                        <input type='text' name='treballador' value='Pere Pons' readOnly/>
                    </div>
                </div>
                <div class="row">
                    <div class='inputBox'>
                        <p>hores:</p>
                        <input type='number' placeholder="hores" name='hores'/>
                    </div>
                </div>
                <textarea placeholder="Descripció"></textarea>
                <div class="materialBox">
                    <div class="material">
                        <select>
                            <option>Material</option>
                            <option>Pot pintura</option>
                            <option>Pinzell</option>
                        </select>
                        <div class="inputBox">
                            <p>unitats</p>
                            <input type='number' name='unitatsMaterial' />
                        </div>
                        <div class="inputBox">
                            <p>Descripció</p>
                            <textarea></textarea>
                        </div>
                    </div>
                </div>
                    <button 
                        type='button' 
                        class="btnTintedGlass" 
                        style="--width: 140px;"
                    >Afegir Material</button>
                    `

        const feina = document.createElement('div')
        feina.classList.add('feina');
        feina.innerHTML = feinaHTML;
        document.querySelector('.feinesBox').appendChild(feina);

        const feinaElements = document.querySelectorAll(".feinesBox .feina");
        const feinaElement = feinaElements[feinaElements.length -1 ];
        feinaElement.querySelector(".btnTintedGlass:not(.eliminarFeina)").addEventListener('click', () => addMaterial({feinaElement}))
    }


    const CreatePresupost = () => {
        const id = document.querySelector(".identificators input[name='id']").value;
        const idFF = document.querySelector(".identificators input[name='idff']").value;
        const feines = [];

        document.querySelectorAll('.feina').forEach(f => {
            const feina = f.querySelector('select').value;
            const id = f.querySelector("input[name='id'").value;
            const treballador = f.querySelector(".treballador select").value;
            const hores = f.querySelector("input[name='hores']").value;
            const descripcio = f.querySelector("textarea").value;

            const materials = [];
            f.querySelectorAll('.material').forEach(m => {
                const material = m.querySelector('select').value;
                const unitats = m.querySelector("input[name='unitatsMaterial']").value;
                const descripcio = m.querySelector("textarea").value;
                materials.push({material, unitats, descripcio})
            })
            feines.push({feina, id, treballador, hores, descripcio, materials})
        })

        console.log({id, idFF, feines})
    }

    let form;

    if(hide === 'hide'){
        if(element.estat !== 'acabat'){
            form = (
                <AddPressupostBox>
                    <div className="identificators">
                        <div className="inputBox">
                            <p>Id</p>
                            <input type='text' name='id' readOnly/>
                        </div>
                        <div className="inputBox">
                            <p>Id fulls de feina</p>
                            <input type='text' name='idff' readOnly/>
                        </div>
                        <div className="inputBox">
                            <p>Data entrega</p>
                            <input type='text' name='dataEntrega' readOnly/>
                        </div>
                        <div className="inputBox">
                            <p>Block</p>
                            <input type='text' name='block' readOnly/>
                        </div>
                    </div>

                    <div className="feinesBox">
                    <div className='feina'>
                        <div className="row">
                            {/* <select>
                                <option>Feina</option>
                                <option>Pintar</option>
                            </select> */}
                            <input type='text' name='feina' value='pintar' readOnly/>
                            <input type='text' placeholder='identificador' name='id' readOnly/>
                            <div className="treballador">
                                <p>Assignada a:</p>
                                {/* <select>
                                    <option>Treballador</option>
                                    <option>Pere Pons</option>
                                </select> */}
                            <input type='text' name='treballador' value='Pere Pons' readOnly/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="inputBox">
                                <p>hores:</p>
                                <input type='number' name='hores'/>
                            </div>
                        </div>

                        <textarea placeholder="Descripció"></textarea>
                        <div className="materialBox">
                            <div className="material">
                                <select>
                                    <option>Material</option>
                                    <option>Pot pintura</option>
                                    <option>Pinzell</option>
                                </select>
                                <div className="inputBox">
                                    <p>unitats</p>
                                    <input type='number' name='unitatsMaterial'/>
                                </div>
                                <div class="inputBox">
                                    <p>Descripció</p>
                                    <textarea></textarea>
                                </div>
                            </div>
                        </div>
                            <button 
                                type='button' 
                                className="btnTintedGlass" 
                                style={{'--width':'140px'}}
                                onClick={() => addMaterial()}
                            >Afegir Material</button>
                    </div>

                    </div>
                    <ButtonsExit>
                        <button
                            type='button'
                            className="btnBlue"
                            style={{'--width':'90px'}}
                            onClick={() => CreatePresupost()}
                        >Guardar</button>
                        <button
                            type='button'
                            className="btnTintedGlass"
                            style={{'--width':'90px'}}
                            onClick={() => setHide('')}
                        >Cancelar</button>
                    </ButtonsExit>
                </AddPressupostBox>
            )
        } else {
            console.log(element)
            form = (
                <FinishedPresupost>
                    <div className="identificators">
                        <p>Id: <strong name='id'>{element.id}</strong></p>
                        <p>Id F.F.: <strong name='idff'>{element.idff}</strong></p>
                            
                        <p>Entrega: <strong name='dataEntrega'>{element.dataEntrega}</strong></p>
                        <p>Block: <strong name='block'>{element.block}</strong></p>
                    </div>

                    <div className="presupostFinal">
                        {element.feines.map(f => (
                            <div>
                                <p>Feina: <strong>{f.feina}</strong></p>
                                <p>Id: <strong>{f.id}</strong></p>
                                <p>Treballador: <strong>{f.treballador}</strong></p>
                                <p>hores: <strong>{f.hores}</strong></p>
                                <p>{f.descripcio}</p>
                                <div className="materialBox">
                                    {f.materials.map(m => (
                                        <div className="material">
                                            <p><strong>{m.unitats} x {m.material}: </strong>{m.descripcio}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <ButtonsExit>
                        <button
                            type='button'
                            className="btnBlue"
                            style={{'--width':'90px'}}
                            onClick={() => setHide('')}
                        >Cerrar</button>
                    </ButtonsExit>
                </FinishedPresupost>
            )
        }
    }
    return form;
}

const FinishedPresupost = styled.div`
    .identificators
    {
        margin: 1.5rem 0 .5rem 0;
        display:flex;
        justify-content:space-evenly;
        flex-wrap: wrap;
        gap: 10px;
    }

    @media only screen and (max-width: 460px){
        p{font-size: 12px;}
    }    
    @media only screen and (max-width: 320px){
        p{font-size: 11px;}
    }
`;
export default WorksheetDetails;
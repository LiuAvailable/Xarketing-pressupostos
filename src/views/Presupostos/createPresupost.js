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
const Totals = styled.div`
input
{
    width: 160px;
    height: 40px;

    border:none;
    outline:none;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 1px 3px 6px #00000020;
    background: white;
}
input:read-only
{
    background: #EEE;
    box-shadow: none;
    border: 1px solid #A0A0A080;
}
margin: 4rem 0 2rem 0;
display:flex;
flex-direction: row;
justify-content: space-evenly;
.inputBox
{
    p{font-size: 12px; margin: 0;}
}

@media only screen and (max-width: 1200px) {
    input{width: 140px;}
}
@media only screen and (max-width: 760px) {
    input{width: 100px; height: 36px; font-size:12px;}
    justify-content: space-between;
}
@media only screen and (max-width: 448px) {
    margin: 2rem 0 2rem 0;
    display:grid;
    grid-template-columns: repeat(2,1fr);
    justify-items:center;
    grid-gap: 10px 0;
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

                /* materials */
                let material = 1;
                f.materials.forEach(m => {
                    document.querySelector(`.feina:nth-child(${feina}) .material:nth-child(${material}) select`).value = m.material;
                    document.querySelector(`.feina:nth-child(${feina}) .material:nth-child(${material}) input[name='unitatsMaterial']`).value = m.unitats;
                    document.querySelector(`.feina:nth-child(${feina}) .material:nth-child(${material}) input[name='preuUnitat']`).value = m.preu;
                    document.querySelector(`.feina:nth-child(${feina}) .material:nth-child(${material}) input[name='preuTotal']`).value = m.total;
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
        const feinaElement = material.parentNode.parentNode
        material.remove()
        sumTotalFeina({feinaElement})
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
                    <p>preu/U</p>
                    <input type='number' name='preuUnitat' />
                </div>
                <input type='text' name='preuTotal' readOnly/>
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

        materialElement.querySelector("input[name='unitatsMaterial']").addEventListener('change', () => sumTotalMaterial({materialElement}));
        materialElement.querySelector("input[name='preuUnitat']").addEventListener('change', () => sumTotalMaterial({materialElement}));
    }

    /**
     * function to add a new task
     */
    const addFeina = () => {
        const feinaHTML = 
            `
            <button class='btnTintedGlass eliminarFeina' style="--width:80px">Eliminar</button>
                <select>
                    <option>Feina</option>
                    <option>Pintar</option>
                </select>
                <input type='text' placeholder='identificador' name='id'/>
                <div class="row treballador">
                    <p>Assignada a:</p>
                    <select>
                        <option>Treballador</option>
                        <option>Pere Pons</option>
                    </select>
                </div>
                <div class="row">
                    <div class='inputBox'>
                        <p>Preu/hora:</p>
                        <input type='number' placeholder="preu/hora" name='preu'/>
                    </div>
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
                            <p>preu/U</p>
                            <input type='number' name='preuUnitat' />
                        </div>
                        <input type='text' name='preuTotal' readOnly/>
                    </div>
                </div>
                    <button 
                        type='button' 
                        class="btnTintedGlass" 
                        style="--width: 130px;"
                    >Afegir Material</button>
            
                    <div class="totalFeina">
                        <p>Total:</p>
                        <input type='text' name='totalFeina' readOnly/>
                    </div>`

        const feina = document.createElement('div')
        feina.classList.add('feina');
        feina.innerHTML = feinaHTML;
        document.querySelector('.feinesBox').appendChild(feina);

        const feinaElements = document.querySelectorAll(".feinesBox .feina");
        const feinaElement = feinaElements[feinaElements.length -1 ];
        feinaElement.querySelector(".btnTintedGlass:not(.eliminarFeina)").addEventListener('click', () => addMaterial({feinaElement}))
        feinaElement.querySelector(".eliminarFeina").addEventListener('click', () => {feinaElement.remove(); sumTotal()})

        feinaElement.querySelector("input[name='preu']").addEventListener('change', () => sumTotalFeina({feinaElement}))
        feinaElement.querySelector("input[name='hores']").addEventListener('change', () => sumTotalFeina({feinaElement}))

        const materialElement = feinaElement.querySelector(".material:first-child");
        materialElement.querySelector("input[name='unitatsMaterial']").addEventListener('change', () => sumTotalMaterial({materialElement}));
        materialElement.querySelector("[name='preuUnitat']").addEventListener('change', () => sumTotalMaterial({materialElement}));
    }

    /**
     * function to sum the total of the presupost
     */
    const sumTotal = () => {
        const feines = document.querySelectorAll("input[name='totalFeina']")

        const totalElement = document.querySelector("input[name='totalPresupost']");
        const baseImposable = document.querySelector("input[name='baseImposable']");
        let total = 0;

        feines.forEach(f => total = total + parseInt(f.value));

        total = total > 0 ? total : '';
        /* descompte */
        let descompte = parseInt(document.querySelector("input[name='descompte']").value);
        descompte = descompte >= 0 ? total * descompte / 100 : 0;

        /* impost */
        let impost = parseInt(document.querySelector("input[name='impost']").value);
        impost = impost >= 0 ? total * impost / 100 : 0;

        /* total */
        totalElement.value = ((total - descompte + impost)*1.21).toFixed(2);
        baseImposable.value = (total - descompte + impost).toFixed(2);
    }

    /**
     * Function to sum the total of a task.
     * @param feina == task to calculate
     */
    const sumTotalFeina = (feina) => {
        if(!feina) feina = document.querySelector(".feina:first-child");
        else feina = feina.feinaElement;

        const totalFeina = feina.querySelector("input[name='totalFeina']");
        let total = 0;

        const preu = parseInt(feina.querySelector("input[name='preu']").value)
        const hores = parseInt(feina.querySelector("input[name='hores']").value);

        const totalMaterials = feina.querySelectorAll(".material input[name='preuTotal']")
        totalMaterials.forEach(material => {
            parseInt(material.value) > 0 ? total = total + parseInt(material.value) : total = total;
        });

        
        if(preu > 0) hores > 0 ? total = total + hores*preu : total = total + preu;
        total > 0 ? totalFeina.value = total : totalFeina.value = '';

        sumTotal()
    }

    /**
     * Function to sum the total of a material
     * @param material == material to calculate
     */
    const sumTotalMaterial = (material) => {
        if(!material) material = document.querySelector(".feina:first-child .material:first-child");
        else material = material.materialElement;

        const totalMaterial = material.querySelector("input[name='preuTotal']");
        let total = 0;

        const unitats = parseInt(material.querySelector("input[name='unitatsMaterial']").value);
        const preu = parseInt(material.querySelector("input[name='preuUnitat']").value);

        unitats > 0 ? total = total + unitats * preu : total = preu;
        total > 0 ? totalMaterial.value = total : totalMaterial.value = '';

        sumTotalFeina({feinaElement:material.parentNode.parentNode})
    }

    const CreatePresupost = () => {
        const id = document.querySelector(".identificators input[name='id']").value;
        const idFF = document.querySelector(".identificators input[name='idff']").value;
        const descompte = document.querySelector("input[name='descompte']").value;
        const impost = document.querySelector("input[name='impost']").value;
        const bi = document.querySelector("input[name='baseImposable']").value;
        const total = document.querySelector("input[name='totalPresupost']").value;
        const feines = [];

        document.querySelectorAll('.feina').forEach(f => {
            const feina = f.querySelector('select').value;
            const id = f.querySelector("input[name='id'").value;
            const treballador = f.querySelector(".treballador select").value;
            const preu = f.querySelector("input[name='preu']").value;
            const hores = f.querySelector("input[name='hores']").value;
            const descripcio = f.querySelector("textarea").value;
            const total = f.querySelector("input[name='totalFeina']").value;

            const materials = [];
            f.querySelectorAll('.material').forEach(m => {
                const material = m.querySelector('select').value;
                const preu = m.querySelector("input[name='preuUnitat']").value;
                const unitats = m.querySelector("input[name='unitatsMaterial']").value;
                const total = m.querySelector("input[name='preuTotal']").value;
                materials.push({material, preu, unitats, total})
            })
            feines.push({feina, id, treballador, preu, hores, descripcio, total, materials})
        })

        console.log({id, idFF, descompte, impost, bi, total, feines})
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
                </div>
                <div className="feinesBox">
                <div className='feina'>
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
                        <div className="inputBox">
                            <p>Preu/hora:</p>
                            <input type='number' placeholder="preu/hora" name='preu'  onChange={() => sumTotalFeina()}/>
                        </div>
                        <div className="inputBox">
                            <p>hores:</p>
                            <input type='number' placeholder="hores" name='hores'  onChange={() => sumTotalFeina()}/>
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
                                <input type='number' name='unitatsMaterial' onChange={() => sumTotalMaterial()}/>
                            </div>
                            <div className="inputBox">
                                <p>preu/U</p>
                                <input type='number' name='preuUnitat' onChange={() => sumTotalMaterial()} />
                            </div>
                            <input type='text' name='preuTotal' readOnly/>
                        </div>
                    </div>
                        <button 
                            type='button' 
                            className="btnTintedGlass" 
                            style={{'--width':'130px'}}
                            onClick={() => addMaterial()}
                        >Afegir Material</button>
                        <div className="totalFeina">
                            <p>Total:</p>
                            <input type='text' name='totalFeina' readOnly/>
                        </div>
                </div>

                </div>
                <NewFeina onClick={() => addFeina()}>Afegir una altre feina</NewFeina>
                <Totals className="totals">
                    <div className="inputBox">
                        <p>Descompte</p>
                        <input type='number' name='descompte' onChange={() => sumTotal()} min='0'/>
                    </div>
                    <div className="inputBox">
                        <p>Impost</p>
                        <input type='number' name='impost' onChange={() => sumTotal()} min='0'/>
                    </div>
                    <div className="inputBox">
                        <p>Base imposable</p>
                        <input type='text' name='baseImposable' readOnly/>
                    </div>
                    <div className="inputBox">
                        <p>Preu total</p>
                        <input type='text' name='totalPresupost' readOnly/>
                    </div>
                </Totals>
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
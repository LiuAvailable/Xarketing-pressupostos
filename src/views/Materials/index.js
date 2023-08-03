import React, {useEffect} from "react";

import {GiCardboardBoxClosed} from 'react-icons/gi';
import { BsArrowLeft } from 'react-icons/bs';

import { Link } from "react-router-dom";

import Table from '../../components/Table/Table';
import Filters from "components/Table/Filters";

import {
    Bg,
    Back,
    CreateUser
} from "./components"

import { useMaterialListSlice } from "../../reducers/materials/index";
import { useDispatch, useSelector } from "react-redux";

const crearMaterial = () => {
    document.querySelector('.material').classList.remove('hide')

    document.querySelector(".material input[name='id']").value = '';
    document.querySelector(".material input[name='name']").value = '';
    document.querySelector(".material input[name='preu']").value = '';
    document.querySelector(".material textarea").value = '';
}

function MaterialsView(){
    const dispatch = useDispatch();
    const { materialListActions, selectMaterialListDomain } = useMaterialListSlice();
    const { materialList } = useSelector(selectMaterialListDomain);
    
    useEffect(() => {
        dispatch(materialListActions.getMaterialsListRequest());
    }, []);

    const filters = [
        {placeholder:'ID', name:'id'},
        {placeholder:'Nom', name:'name'},
    ]
    return(
        <Bg>
            <Back>
                <BsArrowLeft/>
                <Link exact to='/private/home'/>
            </Back>
            <div className="pageHeader">
                <div className="icon"> <GiCardboardBoxClosed/> </div>
                <div className="sectionName">
                    <h1>Materials</h1>
                    <p>Els teus materials</p>
                </div>
            </div>
            <CreateUser>
                <button
                    type='button'
                    className="btnBlue"
                    style={{'--width':'140px'}}
                    onClick={() => crearMaterial()}
                >Nou material</button>
            </CreateUser>
            <Filters filters={filters}/>
            <Table type='materials' object={materialList}/>
        </Bg>
    )
}

export default MaterialsView;
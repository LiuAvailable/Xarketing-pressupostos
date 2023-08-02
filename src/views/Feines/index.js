import React, { useEffect } from "react";
import { BsArrowLeft, BsFillBookFill } from 'react-icons/bs';


import { Link } from "react-router-dom";
import Table from '../../components/Table/Table';
import Filters from "components/Table/Filters";

import { useTaskListSlice } from "../../reducers/tasks/index";

import {
    Bg,
    Back,
    CreateUser
} from './components';
import { useDispatch, useSelector } from "react-redux";




const crearFeina = () => {
    document.querySelector('.material').classList.remove('hide');

    document.querySelector(".material input[name='id']").value = '';
    document.querySelector(".material input[name='name']").value = '';
    document.querySelector(".material input[name='preu']").value = '';
    document.querySelector(".material textarea").value = '';
}

function FeinesView(){
    const dispatch = useDispatch();
    const { taskListActions, selectTaskListDomain } = useTaskListSlice();
    const { taskList } = useSelector(selectTaskListDomain);
    
    useEffect(() => {
        dispatch(taskListActions.getTaskListRequest());
    }, [localStorage.getItem('taskUpdate')]);

    const filters = [
        { placeholder:'ID', name:'id' },
        { placeholder:'Nom', name:'name' },
    ]

    return(
        <Bg>
            <Back>
                <BsArrowLeft/>
                <Link exact to='/private/home'/>
            </Back>
            <div className="pageHeader">
                <div className="icon"> <BsFillBookFill/> </div>
                <div className="sectionName">
                    <h1>Feines</h1>
                    <p>Les teves feines</p>
                </div>
            </div>
            <CreateUser>
                <button
                    type='button'
                    className="btnBlue"
                    style={{'--width':'140px'}}
                    onClick={() => crearFeina()}
                >Nova feina</button>
            </CreateUser>
            <Filters filters={filters}/>
            <Table type='feines' object={taskList}/>
        </Bg>
    )
}

export default FeinesView;
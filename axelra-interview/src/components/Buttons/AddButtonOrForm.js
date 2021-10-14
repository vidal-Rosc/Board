import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import styled from "styled-components";
import { Card, Button } from "@mui/material";
import Textarea from 'react-textarea-autosize';
import {connect} from "react-redux";
import {AddListTask, AddTask} from "../../actions"
import { DoneAllTwoTone } from "@mui/icons-material";


const ButtonAdd = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: 3px;
    border: 1px solid var(--silver2);
    background-color: inherit;
    height: 36px;
    width: auto;
    padding-left:  8px;
    margin-top: 8px;

`;

const TextoArea = styled(Textarea)`
  resize: none;
  width: 100%;
  outline: none;
  overflow: hidden;
  border: none;
`;

const TaskCard = styled(Card)`
  min-height: 80px;
  min-width: 272px;
  padding:  6px 8px 2px;
`;

const SmallButton = styled(Button)`
    background-color: var(--blue) !important;
    color: var(--white);
`;

const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 6px;

`;
const Icon = styled(PowerSettingsNewIcon)`
    margin: 0;
    cursor: pointer;
    color: var(--red);
`;

const AddButtonOrForm  = (props) => {

    const { list } =  props;

    //state para el formulario
    const [openTextarea, setOpenTextarea] = useState(false);
    const [deal, setDeal] = useState("");

    const OpenForm = () => {
        setOpenTextarea(true);
    }
    const CloseForm = e => {
        setOpenTextarea(false);
    }

    const handleChange = e => {
        setDeal(e.target.value);
    }
        
    //Dispatch
    const AddList = () => {
        const { dispatch } = props;
        if(deal) {
            dispatch(AddListTask(deal)); 
        }
       return;
    }

    const AddTasksss = () => {
        const {dispatch, listID} = props;
        if(deal) {
            dispatch(AddTask(listID, deal));
            setDeal("");
        }
    }
       

    const AddButton = (list) => {
        const text = list ?  "Add List": "Add New Task";
        return (
            <ButtonAdd onClick={OpenForm}>
                <AddIcon>add</AddIcon>
                <p>{deal}</p>
            </ButtonAdd>
        )
    }

    const AddForm = () => {

        const { list } =  props;
        const placeHolder = list?  "Write your name list..." : "Type the task name...";
        const ButtonTitle = list ? "Add List" : "Add Task";
        return (
            <div>
                <TaskCard>
                    <TextoArea
                        placeholder={placeHolder}
                        autoFocus
                        onBlur={CloseForm}
                        value={deal}
                        onChange={handleChange}
                    />
                </TaskCard>
                <Buttons>
                    <SmallButton 
                        variant="contained" 
                        onMouseDown={ list ? AddList : AddTasksss }
                        >{ButtonTitle}{" "}
                </SmallButton>
                    <Icon>Close</Icon>
                </Buttons>
            </div>
        )
    }
    if(openTextarea){
        return  AddForm();
    }
    return AddButton();
}
 
export default connect()(AddButtonOrForm)
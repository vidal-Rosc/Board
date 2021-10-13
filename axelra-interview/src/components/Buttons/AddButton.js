import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import styled from "styled-components";

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

const AddButton  = (props) => {


    const [openForm, setOpenForm] = useState(false)

    const {list} = props;
    const text = list ?  "Add List": "Add New Task";
    return (
            <ButtonAdd>
                <AddIcon>add</AddIcon>
                <p>{text}</p>
            </ButtonAdd>
        );
}
 
export default AddButton;
import React from 'react';
import styled from 'styled-components';
import TaskCard from './TaskCard';
import AddButtonOrForm from './Buttons/AddButtonOrForm';


const Container = styled.div`
    background-color: var(--grey1);
    border-radius: 5px;
    padding: 8px;
    width: 300px;
    height: 100%;
    margin-right: 6px;
    border: 2px solid var(--silver2);
`;



const TaskList = ({title, cards, listID}) => {

    return (
        <Container>
            <h4>{title}</h4>
             {cards.map( card => <TaskCard  key={card.id} text={card.deal}/>)}
            <AddButtonOrForm  listID={listID}/>
        </Container>
        
     );
}
 
export default TaskList;
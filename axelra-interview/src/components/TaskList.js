import React,{ useState } from 'react';
import styled from 'styled-components';
import TaskCard from './TaskCard';
import AddButton from './Buttons/AddButton';

const Container = styled.div`
    background-color: var(--grey1);
    border-radius: 5px;
    padding: 8px;
    width: 300px;
    margin-right: 6px;
    border: 2px solid var(--silver2);
`;



const TaskList = ({title, cards}) => {

    use
    return (
        <Container>
            <h4>{title}</h4>
             {cards.map( card => <TaskCard  key={card.id} description={card.deal}/>)}
             <div>
                <AddButton />
             </div>
        </Container>
        
     );
}
 
export default TaskList;
import React from "react";
import Card from '@mui/material/Card';
import styled from "styled-components";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const CardContainer = styled(Card)`
    margin-bottom: 8px;
`;


const TaskCard = ({text}) => {
    return ( 
        <CardContent>
            <CardContainer>
                <Typography gutterBottom>{text}</Typography>
            </CardContainer>
        </CardContent>
        
    );
}
 
export default TaskCard;
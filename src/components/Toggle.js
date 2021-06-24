import React from 'react';
import styled from 'styled-components';


const Toggle = ({toggleBtn}) => {
    return (

        <div>
            <Button onClick={toggleBtn}>
                Click me to toggle
            </Button>
        </div>
    )
}

const Button = styled.button`
    cursor:pointer
`;

export default Toggle;

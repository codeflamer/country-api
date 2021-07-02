import React from 'react';
import styled from 'styled-components';


const Toggle = ({toggleBtn,text}) => {
    console.log(typeof(text));
    return (

        <div>
            <Button onClick={toggleBtn}>
                <div dangerouslySetInnerHTML={{__html: text}} />
            </Button>
        </div>
    )
}

const Button = styled.button`
    cursor:pointer;
    background:transparent;
    border:none;
    outline:none;
    color: var(--textColor);
    font-size:15px;
`;

export default Toggle;

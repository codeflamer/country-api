import React from 'react';
import styled from 'styled-components';
import Country from './Country';

const Countries = () => {
    return (
        <Container>
            <Content>
                <Country/>
                <Country/>
                <Country/>
                <Country/>
                <Country/>
                <Country/>
            </Content>
        </Container>
    )
}

const Container = styled.section`
    // border:1px solid red;
    margin-top:30px;
`;
const Content = styled.div`
    max-width:1400px;
    margin:0 auto;
    display:grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap:30px;
    padding:17px 40px;
    @media(max-width:948px){
        grid-template-columns: repeat(3, 1fr);
    }
    @media(max-width:768px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media(max-width:500px){
        grid-template-columns: repeat(1, 1fr);
    }
`;

export default Countries;

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Country = ({name,flag,population,region,capital}) => {
    return (
        <Container>
            <Link to={`details/${name}`}>
                <Card>
                    <Cardheader><img src={flag} alt='flag'/></Cardheader>
                    <Cardbody>
                        <CardBodyContainer>
                            <h4>{name}</h4>
                            <CardDetail>
                                <li><span>Population</span>: {population}</li>
                                <li><span>Region</span>: {region}</li>
                                <li><span>Capital</span>: {capital}</li>
                            </CardDetail>
                        </CardBodyContainer>
                    </Cardbody>
                </Card>
            </Link>
        </Container>
    )
}

const Container = styled.div`
    // border:1px solid blue;
    background:var(--elemBg);
    padding:0;
    margin:0;
    border-radius:10px;
    a{
        text-decoration:none;
        color:var(--inputColor);
    }
`
const Card = styled.div``
const Cardheader = styled.div`
height:200px;
width:100%;
  img{
      width:100%;
      height:200px;
      border-top-right-radius:10px;
      border-top-left-radius:10px;
  }
`
const Cardbody = styled.div`
    padding:8px 30px;
`
const CardBodyContainer = styled.div`
    margin-bottom:40px;
    color:var(--inputColor);
    h4{
        padding:0;
        margin:0;
        margin-bottom:22px;
    }
`
const CardDetail = styled.div`
    list-style:none;
    margin-top:10px;
    font-size:14px;
    li{
        margin-top:10px;
        span{
            font-weight:bold;
        }
    }
    
`

export default Country

import React from 'react';
import styled from 'styled-components';

const Country = () => {
    return (
        <Container>
            <Card>
                <Cardheader><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAElBMVEUAAAD/zgDdAADnAADaAAD/2AAtsSEoAAAA+ElEQVR4nO3QMQGAMAAEsYeCf8tIuI0pkZANAAAAAAAAAAAAAAAAAAAAgB8dwm6CoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKewh7CbsIipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUofMGTNC8HkSxoAAAAASUVORK5CYII=' alt='flag'/></Cardheader>
                <Cardbody>
                    <CardBodyContainer>
                        <h4>Germany</h4>
                        <CardDetail>
                            <li><span>Population</span>: 81,770.90</li>
                            <li><span>Region</span>: Europe</li>
                            <li><span>Capital</span>: Berlin</li>
                        </CardDetail>
                    </CardBodyContainer>
                </Cardbody>
            </Card>
        </Container>
    )
}

const Container = styled.div`
    // border:1px solid blue;
    background:var(--elemBg);
    padding:0;
    margin:0;
    border-radius:10px;
`
const Card = styled.div``
const Cardheader = styled.div`
  img{
      width:100%;
      border-top-right-radius:10px;
      border-top-left-radius:10px;
  }
`
const Cardbody = styled.div`
    padding:8px 30px;
`
const CardBodyContainer = styled.div`
    margin-bottom:40px;
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

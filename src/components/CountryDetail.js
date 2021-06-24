import React from 'react';
import styled from 'styled-components';


const CountryDetail = () => {
    return (
        <Container>
            <Navigation>
                <Cont>
                    <Button>Back</Button>
                </Cont>
            </Navigation>
            <Contents>
                <Content1>
                    <ImageContainer>
                        <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAElBMVEUAAAD/zgDdAADnAADaAAD/2AAtsSEoAAAA+ElEQVR4nO3QMQGAMAAEsYeCf8tIuI0pkZANAAAAAAAAAAAAAAAAAAAAgB8dwm6CoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKewh7CbsIipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUofMGTNC8HkSxoAAAAASUVORK5CYII=' alt='country-big-flag'/>
                    </ImageContainer>
                </Content1>
                <Content2>
                    <CountryInfo>
                        <CountryName>
                            <h3>Belgium</h3>
                            <CountryDiv>
                                <FirstBatch>
                                    <li><span>Native name</span>: Belgie</li>
                                    <li><span>Population</span>: 11,315.511</li>
                                    <li><span>Region</span>: Europe</li>
                                    <li><span>Sub Region</span>: Western Europe</li>
                                    <li><span>Capital</span>: Brussels</li>
                                </FirstBatch>
                                <SecondBatch>
                                    <li><span>Top level Domain</span>: be</li>
                                    <li><span>Currencies</span>: Euro</li>
                                    <li><span>Languages</span>: Dutch,French,German</li>
                                </SecondBatch>
                            </CountryDiv>
                        </CountryName>
                    </CountryInfo>
                        <Content3>
                            <h4>Border Countries:</h4> 
                            <CounterBorder>
                                <li>France</li>
                                <li>Germany</li>
                                <li>Netherlands</li>
                            </CounterBorder>
                        </Content3>
                </Content2>
              
            </Contents>
        </Container>
    )
}

const Container = styled.section`
    margin-top:50px;
    // border:1px solid blue;
`
const Navigation = styled.div`
    // padding:17px 40px;
    // max-width:1400px;
`
const Cont = styled.div`
    padding:17px 40px;
    max-width:1400px;
    margin:0 auto;
`
const Button = styled.button`
max-width:1400px;
    cursor:pointer;
    color:var(--textColor);
    background:var(--elemBg);
    padding:10px 35px;
    outline:none;
    border:none;
    border-radius:5px;
`
const Contents = styled.div`
// border:1px solid red;
margin:0 auto;
max-width:1400px;
    padding:17px 40px;
    display:flex;
    justify-content:space-between;
    @media(max-width:868px){
        flex-direction:column;
        padding:17px 40px;
    }
`;
const Content1 = styled.div`
    width:45%;
    @media(max-width:868px){
        width:100%;
    }
`;
const ImageContainer = styled.div`
    // border:1px solid green;
    display:block;
    width:100%;
    img{
        width:100%;
    }
`;
const Content2 = styled.div`
    // border:1px solid red;
    width:50%;
    padding-bottom:30px;
    @media(max-width:868px){
        width:100%;
        margin-top:30px;
    }
`;
const CountryInfo = styled.div``;
const CountryName = styled.div`
    h3{
        font-size:30px;
    }
`;
const CountryDiv = styled.div`
    display:flex;
    justify-content:space-between;
    color:var(--inputColor);
    @media(max-width:500px){
        flex-direction:column;
    }
`;
const FirstBatch = styled.div`
    list-style:none;
    li{
        line-height:30px;
        span{
            font-weight:bold;
        }
    }
`;
const SecondBatch = styled.div`
    list-style:none;
    li{
        line-height:30px;
        span{
            font-weight:bold;
        }
    }
    @media(max-width:500px){
       margin-top:20px;
    }
`;
const Content3 = styled.div`
    display:flex;
    align-items:center;
    h4{
        font-size:16px;
    }
    @media(max-width:500px){
        flex-direction:column;
        display:block;
    }
`;
const CounterBorder = styled.ul`
    list-style:none;
    padding:0;
    margin:0;
    display:flex;
    margin-left:20px;
    li{
        margin-right:10px;
        // border:1px solid red;
        padding:4px 15px;
        background:var(--elemBg);
    }
    @media(max-width:500px){
       margin:0;
    }
`;

export default CountryDetail

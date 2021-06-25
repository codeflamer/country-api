import React,{useEffect} from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { callCountry, getCountry } from '../features/country/Country';
import { useDispatch, useSelector } from 'react-redux';


const CountryDetail = () => {

    const dispatch = useDispatch();
    let {id}  = useParams();
    const cont =  useSelector(callCountry);
    
    const getData = async()=>{
        await axios.get(`https://restcountries.eu/rest/v2/name/${id}`)
        .then((response)=>{
            dispatch(getCountry(response.data));
        })
        .catch((error)=>{
            console.log('An Error has Occured, So no Data to Load');
        })
    }

    useEffect(()=>{
        getData();
    },[])
   
    if (cont){
        const {name,flag,nativeName,population,region,subregion,capital,topLevelDomain,currencies,languages,borders} = cont;
        console.log(cont[0]);
        return (
            <Container>
            <Navigation>
                <Cont>
                    <Button><Link to='/'>Back</Link></Button>
                </Cont>
            </Navigation>
            <Contents>
                <Content1>
                    <ImageContainer>
                        <img src={cont[0].flag} alt='country-big-flag'/>
                    </ImageContainer>
                </Content1>
                <Content2>
                    <CountryInfo>
                        <CountryName>
                            <h3>{cont[0].name}</h3>
                            <CountryDiv>
                                <FirstBatch>
                                    <li><span>Native name</span>: {cont[0].nativeName}</li>
                                    <li><span>Population</span>:{cont[0].population}</li>
                                    <li><span>Region</span>: {cont[0].region}</li>
                                    <li><span>Sub Region</span>: {cont[0].subregion}</li>
                                    <li><span>Capital</span>: {cont[0].capital}</li>
                                </FirstBatch>
                                <SecondBatch>
                                    <li><span>Top level Domain</span>: {cont[0].topLevelDomain}</li>
                                    <li><span>Currencies</span>: 
                                        {cont[0].currencies.map((currency)=>[
                                            <li key={currency.name}>{currency.name}</li>
                                        ])}  
                                    </li>
                                    <li><span>Languages</span>: 
                                        {cont[0].languages.map((border)=>[
                                            <li key={border.name}>{border.name}</li>
                                        ])}
                                    </li>
                                </SecondBatch>
                            </CountryDiv>
                        </CountryName>
                    </CountryInfo>
                        <Content3>
                            <h4>Border Countries:</h4> 
                            <CounterBorder>
                                {cont[0].borders.map((border)=>[
                                    <li >{border}</li>
                                ])}  
                            </CounterBorder>
                        </Content3>
                </Content2>
              
            </Contents>
        </Container>
        )
    }
    else{
        return <h2>Loading...</h2>
    }

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
    a{
        color:var(--textColor);
        text-decoration:none;
    }
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
       
       li{
        display:inline-block;
        margin-right:10px;
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
    // border:1px solid red;
    li{
        margin-right:10px;
        // border:1px solid red;
        padding:4px 15px;
        background:var(--elemBg);
        @media(max-width:388px){
            margin-top:10px;
            width:80px;
         }
    }
    @media(max-width:500px){
       margin:0;
    }
    @media(max-width:388px){
        display:block;
     }
    
`;

export default CountryDetail

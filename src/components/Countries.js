import React,{useEffect}from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { callCountriesQuery, callCountries, callQueryCondition, getCountry, setQueryCondition, callIsError } from '../features/country/Country';
import Country from './Country';
import axios from 'axios';
import { useDispatch } from 'react-redux'
import { updateCountries } from '../features/country/Country';

const Countries = () => {
    const error = useSelector(callIsError);
    const countries = useSelector(useSelector(callQueryCondition)===true ? callCountriesQuery : callCountries);
    const dispatch = useDispatch();

    const getData = async()=>{
        await axios.get('https://restcountries.eu/rest/v2/all')
        .then((response)=>{
            // console.log(response.data);
            dispatch(updateCountries(response.data));
            dispatch(getCountry(null));
        })
        .catch((error)=>{
            console.log('An Error has Occured, So no country Data to Load');
        })
    }

    useEffect(()=>{
        getData();
    },[])

    if(error){
        return(
            <Container>
                <ErrorContainer>
                    Such countries/country/region doesn't exist.....
                </ErrorContainer>
            </Container>
        )
    }
    else{
        return (
            <Container>
                <Content>
                    {countries && countries.map((country)=>{
                       return  <Country key={country.name} {...country} />
                    })}
                </Content>
            </Container>
        )
    }
}

const Container = styled.section`
    // border:1px solid red;
    margin-top:30px;
`;
const ErrorContainer = styled.div`
    // border:1px solid red;
    max-width:1400px;
    margin:0 auto;
    font-size:25px;
    color:red;
    text-align:center;
    margin-top:40px;
`
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

import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { useDispatch, } from 'react-redux';
import styled from 'styled-components';
import { getCountry, getQueryName, setIsError, setQueryCondition, updateCountries } from '../features/country/Country';


const Filtering = () => {
    const [query, setQuery] = useState('');
    const [dropquery, setDropQuery] = useState(null);
    const dispatch = useDispatch();

    const searchCountry = (e)=>{
       setQuery(e.target.value);
    }

    const pickRegion = (e)=>{
        setDropQuery(e.target.value);
       console.log(dropquery);
    }

    const callGeneral = async()=>{
        await axios.get('https://restcountries.eu/rest/v2/all')
        .then((response)=>{
            dispatch(updateCountries(response.data));
            dispatch(getCountry(null));
            dispatch(setQueryCondition(false));
        })
        .catch((error)=>{
            console.log('An Error has Occured, So no country Data to Load');
        })
    }

    const getData = async()=>{
        if(query){
            await axios.get(`https://restcountries.eu/rest/v2/name/${query}`)
        .then((response)=>{
            setDropQuery(null);
            dispatch(getQueryName(response.data));
            dispatch(setQueryCondition(query ? true : false));
            dispatch(setIsError(false));       
        })
        .catch((error)=>{
            console.log('Such countries do not exist');
            dispatch(setIsError(true));
            // setDropQuery(null);
            dispatch(setQueryCondition(query ? true : false));
        })
        } 
        if(dropquery){
            if (dropquery === 'null'){
                callGeneral()
            }
            else{
            await axios.get( `https://restcountries.eu/rest/v2/region/${dropquery}`)
            .then((response)=>{
                setQuery('');
                dispatch(setIsError(false));
                dispatch(getQueryName(response.data));
                dispatch(setQueryCondition(dropquery ? true : false));
                console.log('me');
            })
            .catch((error)=>{
                console.log('Such countries do not exist');
                dispatch(setIsError(true));
                // setQuery('');
                dispatch(setQueryCondition(dropquery ? true : false));
            })
        }
        }
        if(query==='null' && !dropquery){
            callGeneral();
        }
    }

    useEffect(()=>{
        getData();
    },[query,dropquery])

    return (
        <Container>
            <Contents>
                <Content1>
                    <form onSubmit={(e)=>e.preventDefault()}>
                        <input type='text' value={query} placeholder=' Search by Country' onChange={(e)=>searchCountry(e)}/>
                    </form>
                </Content1>
                <Content2>
                    <form onSubmit={(e)=>e.preventDefault()}>
                        <select id="cars" name="cars" value={dropquery} onChange={(e)=>pickRegion(e)}>
                            <option value='null'>Filter By Region/for none</option>
                            <option value="africa">Africa</option>
                            <option value="americas">Americas</option>
                            <option value="europe">Europe</option>
                            <option value="oceania">Oceania</option>
                        </select>
                    </form>
                </Content2>
            </Contents>
        </Container>
    )
}

const Container = styled.section`
    // border:1px solid red;
    margin-top:30px;
`;
const Contents = styled.section`
    // border:1px solid red;
    max-width:1400px;
    margin:0 auto;
    display:flex;
    justify-content:space-between;
    padding:17px 40px;
    @media(max-width:768px){
        flex-direction:column;
    }
`;
const Content1 = styled.section`
    display:block;
    form{
        input{
            background:var(--elemBg);
            outline:none;
            border:none;
            color:var(--textColor);
            padding:10px 10px;
            width:350px;
            &::placeholder{
                color:var(--textColor);
            }
            @media(max-width:768px){
                width:100%;
                display:block;
            }
        }
    }
`;
const Content2 = styled.section`
    form{
        select{
            background:var(--elemBg);
            outline:none;
            border:none;
            color:var(--textColor);
            padding:10px 10px;
            width:200px;    
            option{
                cursor:pointer;
                height:200px;
            }
        }
        @media(max-width:768px){
            margin-top:20px;
        }
    }
`;

export default Filtering

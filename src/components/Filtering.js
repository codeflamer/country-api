import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { getQueryName, setIsError, setQueryCondition } from '../features/country/Country';



const Filtering = () => {

    const [query, setQuery] = useState('');
    const dispatch = useDispatch();

    const searchCountry = (e)=>{
       setQuery(e.target.value);
       console.log(query);
    }

    const getData = async()=>{
        if(query){
            await axios.get(`https://restcountries.eu/rest/v2/name/${query}`)
        .then((response)=>{
            // console.log(response.data);
            dispatch(getQueryName(response.data));
            dispatch(setQueryCondition(query ? true : false));
            dispatch(setIsError(false));
            // dispatch(getCountry(null));
        })
        .catch((error)=>{
            console.log('Such countries do not exist');
            // dispatch(getQueryName('Such countries/country do not exist.'));
            dispatch(setIsError(true));
            dispatch(setQueryCondition(query ? true : false));
        })
        } 
    }

    useEffect(()=>{
        getData();
    },[query])

    return (
        <Container>
            <Contents>
                <Content1>
                    <form onSubmit={(e)=>e.preventDefault()}>
                        <input type='text' value={query} placeholder=' Search by Country' onChange={(e)=>searchCountry(e)}/>
                    </form>
                </Content1>
                <Content2>
                    <form>
                        <select id="cars" name="cars">
                            <option>Filter By region</option>
                            <option value="africa">Africa</option>
                            <option value="america">America</option>
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

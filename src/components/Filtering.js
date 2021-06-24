import React from 'react';
import styled from 'styled-components';

const Filtering = () => {
    return (
        <Container>
            <Contents>
                <Content1>
                    <form>
                        <input type='text' placeholder=' Search by Country'/>
                    </form>
                </Content1>
                <Content2>
                    <form>
                        <select id="cars" name="cars">
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
    max-width:1200px;
    margin:0 auto;
    display:flex;
    justify-content:space-between;
    padding:17px 15px;
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

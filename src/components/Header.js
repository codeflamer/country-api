import Reac,{useEffect} from 'react';
import styled from 'styled-components';
import Toggle from './Toggle';
import { ThemeProvider } from 'styled-components';
import { lightTheme , darkTheme} from '../theme';
import GlobalStyles from '../globalStyles';
import { useDarkMode } from '../useDarkMode';
import axios from 'axios';
import { useDispatch } from 'react-redux'
import { updateCountries } from '../features/country/Country';

const Header = () => {
    const [theme, toggleTheme] = useDarkMode();

    const dispatch = useDispatch();

    const getData = async()=>{
        await axios.get('https://restcountries.eu/rest/v2/all')
        .then((response)=>{
            // console.log(response.data);
            dispatch(updateCountries(response.data));
        })
        .catch((error)=>{
            console.log('An Error has Occured, So no Data to Load');
        })
    }

    useEffect(()=>{
        getData();
    },[])
   
    return (
        <ThemeProvider theme={ theme==='light' ? lightTheme: darkTheme }>
            <GlobalStyles/>
            <Nav>
                <Container>
                    <Content1>
                        Where in the World
                    </Content1>
                    <Content2>
                        <Toggle toggleBtn={toggleTheme}/>
                    </Content2>
                </Container>
            </Nav>
        </ThemeProvider>
    )
}

const Nav = styled.nav`
    // border:1px solid red;
    background:var(--elemBg);
    transition: all 0.25s linear;
`;
const Container = styled.div`
    margin:0 auto;
    max-width:1400px;
    // border:1px solid blue;
    display:flex;
    justify-content:space-between;
    padding:17px 15px;
    align-items:center;
`;
const Content1 = styled.div`
    font-weight:bold;
    font-size:20px;
`;
const Content2 = styled.div``;



export default Header;

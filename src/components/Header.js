import React from 'react';
import styled from 'styled-components';
import Toggle from './Toggle';
import { ThemeProvider } from 'styled-components';
import { lightTheme , darkTheme} from '../theme';
import GlobalStyles from '../globalStyles';
import { useDarkMode } from '../useDarkMode';


const Header = () => {
    const [theme, toggleTheme] = useDarkMode();
   
    return (
        <ThemeProvider theme={ theme==='light' ? lightTheme: darkTheme }>
            <GlobalStyles/>
            <Nav>
                <Container>
                    <Content1>
                        Where in the World
                    </Content1>
                    <Content2>
                        <Toggle toggleBtn={toggleTheme} text={ theme==='light' ? '<i class="fas fa-moon"></i> Dark Mode': '<i class="fas fa-sun"></i> Light Mode'}/>
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

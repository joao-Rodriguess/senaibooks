import Logo from '../Logo/index.js';
import OpcoesHeader from '../OpcoesHeader/index.js';
import IconesHeader from '../IconesHeader/index.js';
import styled from 'styled-components';


  const HeaderContainer = styled.header`
  background-color: #fff;
  font-family: 'Open Sans', sans-serif;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  `

function Header() {
    return (
    <HeaderContainer>
        <Logo></Logo> 
        <OpcoesHeader></OpcoesHeader>
        <IconesHeader></IconesHeader>
      </HeaderContainer>
    );
}

export default Header;
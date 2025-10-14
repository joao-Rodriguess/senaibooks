import styled from 'styled-components';
import logo from '../../imagens/logo.svg';

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none; 
`;

const LogoImage = styled.img`
   margin-right: 10px;
    width: 60px;
    height: 60px;

`;

function Logo() {
  return (
    <LogoContainer>
      <LogoImage src={logo} alt="logo" />
      <p><strong>SENAI</strong> Books</p>
    </LogoContainer>
  );
}

export default Logo;

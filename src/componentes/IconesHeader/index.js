
import perfil from '../../imagens/perfil.svg';
import sacola from '../../imagens/sacola.svg';
import styled from 'styled-components';

const icones = [perfil,sacola];

const Icones = styled.ul`
  display: flex;
  align-items: center;

`;

const Icone = styled.li`
  margin-right: 40px;
  width: 24px;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }

  &:hover .icone-img {
    width: 100%;
    height: 100%;
  }
`;

function IconesHeader() {
  return (
    <Icones>
      {icones.map((icone) => (
        <Icone key={icone}>
          <img src={icone} className="icone-img" alt="icone" />
        </Icone>
      ))}
    </Icones>
  );
}


export default IconesHeader;
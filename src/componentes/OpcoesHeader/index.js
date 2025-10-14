import styled from "styled-components";

const OpcoesContainer = styled.ul`
  display: flex;
`;

const Opcao = styled.li`
font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
  cursor: pointer;
  padding: 0 5px;
  min-width: 120px;
  
  &:hover {
   background-color: #929292;
  border-radius: 8px;
  color: white;
  }
`;

const textoOpcoes = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS'];

function OpcoesHeader() {
  return (
        <OpcoesContainer>
          {textoOpcoes.map((opcao) => (
            <Opcao key={opcao}><p>{opcao}</p></Opcao>
          ))}
        </OpcoesContainer>
    );
}

export default OpcoesHeader;
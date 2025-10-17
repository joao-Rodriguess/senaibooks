import Input from "../input";
import styled from "styled-components";
import { useState } from "react";
import { livros } from "./dadosPesquisa";


const PesquisaContainer = styled.section`
     background-image: linear-gradient(90deg, #002f52 32%, #326589 165%);
    color: white;
    text-align: center;
    padding: 85px 0;
    height: 500px; // Aumentei a altura para ter espaço para o scroll
    width: 100%;
`;

const Titulo = styled.h2`
    color: white;
    font-size: 36px;
    text-align: center;
    width: 100%;
`;

const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`;

const Container = styled.div`
       max-height: 300px; // Altura máxima do container
    overflow-y: auto; // Adiciona scroll vertical
    padding: 0 20px;
    
    /* Estilização da scrollbar */
    &::-webkit-scrollbar {
        width: 8px;
    }
    
    &::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 4px;
    }
    
    &::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.4);
        border-radius: 4px;
    }
`;

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-botom: 20px;
    cursor: pointer;
    gap: 10px;
    width: 300px;
    margin: 0 auto 10px auto;
    padding: 5px;
    background-color: #004b75;
    border: 1px solid transparent;
    border-radius: 8px;
    transition: 0.3s;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: left;
    font-size: 14px;
   
    p{
        width: 200px;

    }

    img{
        width: 100px;
        height: 150px;
        object-fit: cover;
        margin-bottom: 10px;
    }

    &:hover{
        border: 2px solid white;
        border-radius: 8px;
        padding: 5px;
        background-color: #929292;
        transition: 0.3s;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        transform: scale(1.05);
    }
`;

function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([]);

    console.log(livrosPesquisados);
    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Pesquise por um livro, autor ou assunto</Subtitulo>
            <Input type="text" placeholder="O que você procura?"  onBlur={evento => {const textoDigitado = evento.target.value
            const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado))
            setLivrosPesquisados(resultadoPesquisa)

            }}/>

           
            <Container>
               {livrosPesquisados.map(livro => (
                   <Resultado key={livro.id}>
                       <img src={livro.src} alt={livro.nome} />
                       <p>{livro.nome}</p>
                   </Resultado>
               ))}
              </Container>
        </PesquisaContainer>

        
    );
}

export default Pesquisa;

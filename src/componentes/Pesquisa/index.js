import Input from "../input";
import styled from "styled-components";
import { useState } from "react";

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002f52 32%, #326589 165%);
    color: white;
    text-align: center;
    padding: 85px 0;
    height: 270px;
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

function Pesquisa() {
    const [textoDigitado, setTextoDigitado] = useState('');
    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Pesquise por um livro, autor ou assunto</Subtitulo>
            <Input type="text" placeholder="O que você procura?"  onBlur={evento => setTextoDigitado(evento.target.value)}/>

            <p>{textoDigitado}</p>
        </PesquisaContainer>
    );
}

export default Pesquisa;

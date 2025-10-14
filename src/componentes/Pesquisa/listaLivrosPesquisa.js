
export default function ListaLivros({ livros }) {
    return (
        <ul>
            {livros.map(livro => (
                <li key={livro.id}>
                    <img src={livro.src} alt={livro.nome} />
                    <h4>{livro.nome}</h4>
                </li>
            ))}
        </ul>
    );
}

export interface GeneroLiterario {
    id: string;
    value: string;
    livros: Livro[]
}
export interface Livro {
    titulo: string;
    autoria: string;
    image:  string; 
    favorite: boolean;
    genero: GeneroLiterario;
}

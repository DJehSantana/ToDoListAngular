export class UsuarioCriacaoDTO {
    id?: number;
    nome: string = "";
    login: string = "";
    email: string = "";
    senha: string = "";
    dataNascimento?: string;
}
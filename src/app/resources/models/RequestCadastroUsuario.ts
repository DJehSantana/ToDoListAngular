export class RequestCadastroUsuario {
    public nome: string;
    public login: string;
    public email: string;
    public senha: string;
    public dataNascimento?: string;

    public constructor() {
        this.nome = "";
        this.login = "";
        this.email = "";
        this.senha = "";
    }
}
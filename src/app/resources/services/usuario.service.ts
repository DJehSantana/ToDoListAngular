import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioCriacaoDTO } from 'src/app/DTO/usuarioDTO';
import { ResponseCadastroUsuario } from '../models/ResponseCadastroUsuario';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private readonly API = `${environment.API}usuario`
  constructor(private $http: HttpClient) { }

  public salvarUsuario(usuarioDTO: UsuarioCriacaoDTO) {

    return this.$http.post(`${this.API}`, usuarioDTO);
  }

  public listarUsuarios() {
    return this.$http.get(`${this.API}`);
  }

  public deletarUsuario(id: number) {
    return this.$http.delete(`${this.API}/${id}`);
  }

}

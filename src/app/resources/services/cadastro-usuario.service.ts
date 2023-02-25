import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestCadastroUsuario } from '../models/RequestCadastroUsuario';
import { Observable } from 'rxjs';
import { ResponseCadastroUsuario } from '../models/ResponseCadastroUsuario';

@Injectable({
  providedIn: 'root'
})
export class CadastroUsuarioService {

  constructor(private $http: HttpClient) { }

  public salvarUsuario(requestCadastroUsuario: RequestCadastroUsuario): Observable<ResponseCadastroUsuario> {
    return this.$http.post<ResponseCadastroUsuario>(
      'http://localhost:8080/api/usuario',
      requestCadastroUsuario);
  }

  public listarUsuarios() {
    return this.$http.get('http://localhost:8080/api/usuario');
  }
}

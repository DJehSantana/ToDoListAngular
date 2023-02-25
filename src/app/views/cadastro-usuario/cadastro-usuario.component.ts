import { Component, OnInit } from '@angular/core';
import { RequestCadastroUsuario } from 'src/app/resources/models/RequestCadastroUsuario';
import { CadastroUsuarioService } from 'src/app/resources/services/cadastro-usuario.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  public requestCadastroUsuario: RequestCadastroUsuario;

  constructor(private cadastroUsuarioService: CadastroUsuarioService) {
    this.requestCadastroUsuario = new RequestCadastroUsuario();

  }

  ngOnInit(): void {

  }

  public salvarUsuario(): void {
    this.cadastroUsuarioService.salvarUsuario(this.requestCadastroUsuario).subscribe((data) => {
      console.log(data);
    },
      (error) => {
        console.error(error);
      });
  }
}

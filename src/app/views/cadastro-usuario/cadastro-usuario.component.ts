import { Component, OnInit } from '@angular/core';
import { RequestCadastroUsuario } from 'src/app/resources/models/RequestCadastroUsuario';
import { AlertService } from 'src/app/resources/services/alert.service';
import { CadastroUsuarioService } from 'src/app/resources/services/cadastro-usuario.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  public requestCadastroUsuario: RequestCadastroUsuario;

  constructor(
    private cadastroUsuarioService: CadastroUsuarioService,
    private alertService: AlertService) {
    this.requestCadastroUsuario = new RequestCadastroUsuario();

  }

  ngOnInit(): void {

  }

  public salvarUsuario(): void {

    this.cadastroUsuarioService.salvarUsuario(this.requestCadastroUsuario).subscribe((data) => {
      //console.log(data);
      this.alertService.success("Usuário cadastrado com sucesso!", "Sucesso!");
    },
      (httpError) => {
        this.alertService.error(httpError.error.parameterViolations[0].message, "Ops! Algo deu errado!");
        //console.error(httpError.error);
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { UsuarioCriacaoDTO } from 'src/app/DTO/usuarioDTO';
import { AlertService } from 'src/app/resources/services/alert.service';
import { UsuarioService } from 'src/app/resources/services/usuario.service';
import { FormValidator } from 'src/app/helpers/validators/formValidator';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  id: any;
  usuario: UsuarioCriacaoDTO = new UsuarioCriacaoDTO();
  formValidator: FormValidator = new FormValidator(this.formBuilder);

  constructor(
    private usuarioService: UsuarioService,
    private alertService: AlertService,
    private formBuilder: FormBuilder
  ) {
  }
  ngOnInit(): void {

  }

  public salvarUsuario(): void {

    if (this.usuario.dataNascimento) {
      this.usuario.dataNascimento = new Date(this.usuario.dataNascimento);
    }
    this.usuarioService.salvarUsuario(this.usuario).subscribe((data) => {
      console.log(data);
      this.alertService.success("Usuário cadastrado com sucesso!", "Sucesso!");
    },
      (httpError) => {
        this.alertService.error(httpError.error.parameterViolations[0].message, "Ops! Algo deu errado!");
        console.error(httpError.error);
      });
  }
}

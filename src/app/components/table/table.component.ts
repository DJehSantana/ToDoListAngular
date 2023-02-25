import { Component, OnInit } from '@angular/core';
import { CadastroUsuarioService } from 'src/app/resources/services/cadastro-usuario.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  usuario: any;

  constructor(private usuarioService: CadastroUsuarioService) {
  }

  ngOnInit(): void {
    this.usuarioService.listarUsuarios().subscribe(user => {
      this.usuario = user
      console.log(this.usuario);
    });

  }
}


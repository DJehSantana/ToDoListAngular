import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/resources/services/usuario.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  usuario: any;

  constructor(private usuarioService: UsuarioService) {
  }

  ngOnInit(): void {
    this.usuarioService.listarUsuarios().subscribe(user => {
      this.usuario = user
      console.log(this.usuario);
    });

  }

  deletarUsuario = (id: number) => {
    try {
      this.usuarioService.deletarUsuario(id).subscribe();

    } catch (error) {
      console.log(error);
    } finally {
      this.ngOnInit();
    }

  }
}


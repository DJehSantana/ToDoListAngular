import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/resources/services/usuario.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  usuario: any;
  dia?: number;
  data?: Date;
  mes?: number;
  ano?: number;
  formatacao?: string;
  dataFormatada?: string;

  constructor(private usuarioService: UsuarioService) {
  }

  ngOnInit(): void {
    this.usuarioService.listarUsuarios().subscribe(users => {
      Object.values(users).forEach((user) => {
        if (user.dataNascimento) {
          this.data = new Date(user.dataNascimento);
          user.dataNascimento = this.formatarData(this.data);
        }
      });

      this.usuario = users;
    });

  }

  formatarData = (data: Date) => {
    this.dia = data.getDate();
    this.mes = data.getMonth();
    this.ano = data.getFullYear();
    this.dataFormatada = `${this.dia}/${this.mes}/${this.ano}`;
    return this.dataFormatada;
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


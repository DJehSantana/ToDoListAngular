import { Component, Input, OnInit } from '@angular/core';
import { tarefaDTO } from 'src/app/DTO/tarefaDTO';
import { Status } from 'src/app/helpers/enums/statusEnum';
import { TarefaService } from 'src/app/resources/services/tarefa.service';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.css']
})
export class KanbanComponent implements OnInit {

  tarefas: tarefaDTO[];

  hoje: string;

  @Input() status: Status;

  constructor(private tarefaService: TarefaService) { }


  ngOnInit(): void {
    this.atualizarListaTarefas();
    this.hoje = new Date().toISOString().slice(0, 10);

  }

  atualizarListaTarefas() {
    this.tarefaService.listarTarefas().subscribe(tarefas => {
      this.tarefas = tarefas;

      for (const tarefa of this.tarefas) {
        new Date(tarefa.conclusao) < new Date(this.hoje) ? tarefa.atrasada = true : tarefa.atrasada = false;
      }
    });

  }

}

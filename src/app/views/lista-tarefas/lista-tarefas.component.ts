import { Component, OnInit, ViewChild } from '@angular/core';
import { tarefaDTO } from 'src/app/DTO/tarefaDTO';
import { TarefaComponent } from '../tarefa/tarefa.component';
import { TarefaService } from 'src/app/resources/services/tarefa.service';
import { AlertService } from 'src/app/resources/services/alert.service';
import { criarHistorico } from 'src/app/helpers/logger/logs';
import { LogService } from 'src/app/resources/services/log.service';

@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.css']
})
export class ListaTarefasComponent implements OnInit {

  inicio: string;
  fim: string;
  hoje: string;
  msgHistorico: string;

  tarefa: tarefaDTO[] = [];

  @ViewChild(TarefaComponent) tarefaComponent!: TarefaComponent;

  constructor(
    private tarefaService: TarefaService,
    private alertService: AlertService,
    private logService: LogService
  ) {

  }

  ngOnInit(): void {
    this.atualizarListaTarefas();
    this.hoje = new Date().toISOString().slice(0, 10);
  }

  ngAfterViewInit(): void {

  }



  visualizarTarefa(tarefa: tarefaDTO) {
    this.tarefaComponent.showModal(tarefa);
  }


  deletarTarefa(id: number) {
    this.tarefaService.deletarTarefa(id).subscribe(() => {
      this.atualizarListaTarefas();
      this.msgHistorico = criarHistorico('delete', `Tarefa deletada: ID (${id}) - SUCESSO`);
      this.logService.addLog(this.msgHistorico);
    });
  }

  atualizarListaTarefas() {
    this.tarefaService.listarTarefas().subscribe(tarefas => {
      this.tarefa = tarefas;

      for (const tarefa of this.tarefa) {
        new Date(tarefa.conclusao) < new Date(this.hoje) ? tarefa.atrasada = true : tarefa.atrasada = false;
      }
    });

  }

  filtrarTarefas() {
    if (this.inicio == null || this.fim == null) {
      this.alertService.error('Necessário inserir data de início e fim do período de consulta!', 'Falha ao consultar');
      return;
    }
    this.tarefaService.filtrarTarefas(this.inicio, this.fim).subscribe(tarefas => {
      this.tarefa = tarefas;
    });
    this.msgHistorico = criarHistorico('get', `Consulta por período : Início (${this.inicio}) - Fim (${this.fim})`);
    this.logService.addLog(this.msgHistorico);
  }

}

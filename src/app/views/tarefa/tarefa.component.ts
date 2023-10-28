import { Component, Input, OnInit } from '@angular/core';
import { tarefaDTO } from 'src/app/DTO/tarefaDTO';
import { Status } from 'src/app/helpers/enums/statusEnum';
import { Validators } from '@angular/forms';
import { criarHistorico } from 'src/app/helpers/logger/logs';
import { AlertService } from 'src/app/resources/services/alert.service';
import { LogService } from 'src/app/resources/services/log.service';
import { TarefaService } from 'src/app/resources/services/tarefa.service';
import { FormValidator } from 'src/app/helpers/validators/formValidator';

interface StatusTarefa {
  id: number;
  nome: string;
}

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent implements OnInit {

  @Input() visible: boolean = false
  @Input('tarefa') tarefa: tarefaDTO = new tarefaDTO();

  formValidator: FormValidator;

  constructor(
    private tarefaService: TarefaService,
    private logService: LogService,
    private alertService: AlertService,
  ) {

  }

  statusTarefa: StatusTarefa[] = [];
  selectedStatus: StatusTarefa;
  msgHistorico: string;


  ngOnInit() {
    this.statusTarefa = [
      {
        id: 1,
        nome: Status.TODO
      },
      {
        id: 2,
        nome: Status.DOING
      },
      {
        id: 3,
        nome: Status.PENDING
      },
      {
        id: 4,
        nome: Status.DONE
      }

    ];


  }

  showModal(tarefa: tarefaDTO) {
    this.tarefa = tarefa;
    console.log(tarefa);
    tarefa.status ? this.selectedStatus.nome = tarefa.status : this.selectedStatus.nome = Status.TODO;
    this.visible = true;
  }

  closeModal() {
    this.visible = false;
  }

  atualizarTarefa(tarefa: tarefaDTO) {
    if (tarefa) {
      this.tarefa = tarefa;
      this.tarefa.status = this.selectedStatus.nome;
      //this.tarefa.conclusao = tarefa.conclusao;
      //this.tarefa.descricao = tarefa.descricao;
      this.tarefaService.atualizarTarefa(tarefa).subscribe(tarefa => {
        this.msgHistorico = criarHistorico('put', `Tarefa atualizada: ID (${tarefa.id})- ${tarefa.titulo}: ${tarefa.descricao} - STATUS: ${tarefa.conclusao} - SUCESSO`);
        this.logService.addLog(this.msgHistorico);
        this.tarefa = tarefa;
      });
    }

    this.alertService.success('Tarefa atualizada com sucesso!', 'SUCESSO');
    this.closeModal();
  }



}

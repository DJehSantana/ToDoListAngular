import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { tarefaDTO } from 'src/app/DTO/tarefaDTO';
import { Status } from 'src/app/helpers/enums/statusEnum';
import { criarHistorico } from 'src/app/helpers/logger/logs';
import { FormValidator } from 'src/app/helpers/validators/formValidator';
import { AlertService } from 'src/app/resources/services/alert.service';
import { LogService } from 'src/app/resources/services/log.service';
import { TarefaService } from 'src/app/resources/services/tarefa.service';

@Component({
  selector: 'app-cadastrar-tarefa',
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrls: ['./cadastrar-tarefa.component.css']
})
export class CadastrarTarefaComponent implements OnInit, OnChanges {

  id: any;
  tarefas: tarefaDTO[] = [];
  tarefa: tarefaDTO = new tarefaDTO();
  textoBotao: string = "Salvar";
  textoTitulo: string = "Cadastrar Nova Tarefa";
  eCadastro: boolean = true;
  formValidator: FormValidator = new FormValidator(this.formBuilder);
  msgHistorico: string;

  constructor(
    private alertService: AlertService,
    private formBuilder: FormBuilder,
    private logService: LogService,
    private tarefaService: TarefaService
  ) { }


  ngOnInit(): void {
    this.tarefa.conclusao = new Date().toISOString().slice(0, 10);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.tarefaService.listarTarefas().subscribe(tarefas => {
      this.tarefas = tarefas;
    })
  }

  criarTarefa() {
    console.log("Chamou o método criar");
    this.tarefa.status = Status.TODO;
    this.tarefa.criacao = new Date().toISOString().slice(0, 10);
    this.tarefaService.criarTarefa(this.tarefa).subscribe(response => {
      if (response) {
        console.log(`chegou no response`);
        this.msgHistorico = criarHistorico('post', `Tarefa criada: ID (${response.id}) - ${response.titulo}: ${response.descricao} - STATUS: ${response.conclusao}`);
        this.logService.addLog(this.msgHistorico);
        this.alertService.success('Tarefa criada com sucesso!', "SUCESSO");
      }
    });

  }





}
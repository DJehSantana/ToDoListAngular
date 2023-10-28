import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/resources/services/log.service';

@Component({
  selector: 'app-historico-logs',
  templateUrl: './historico-logs.component.html',
  styleUrls: ['./historico-logs.component.css']
})
export class HistoricoLogsComponent implements OnInit {

  logs: string[];

  constructor(private logService: LogService) {
    this.logService.logSubject.subscribe(logs => {
      this.logs = logs;
    });
  }

  ngOnInit(): void {

  }
}

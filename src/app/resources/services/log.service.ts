import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  private logs: string[] = [];
  logSubject = new Subject<string[]>();

  addLog(log: string) {
    console.log(`chegou aqui: ${log}`);
    this.logs.push(log);
    this.logSubject.next(this.logs);
  }

  getLogs() {
    return this.logs;
  }
}

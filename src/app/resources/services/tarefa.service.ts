import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { tarefaDTO } from '../../DTO/tarefaDTO';

@Injectable({
    providedIn: 'root'
})
export class TarefaService {
    private apiUrl = 'http://localhost:3000/tarefas';

    constructor(private http: HttpClient) { }

    listarTarefas(): Observable<tarefaDTO[]> {
        console.log('Chamou listar tarefas!');
        return this.http.get<tarefaDTO[]>(this.apiUrl);
    }

    buscarTarefa(id: number): Observable<tarefaDTO> {
        return this.http.get<tarefaDTO>(`${this.apiUrl}/${id}`);
    }

    criarTarefa(tarefa: tarefaDTO): Observable<tarefaDTO> {
        return this.http.post<tarefaDTO>(this.apiUrl, tarefa);
    }

    atualizarTarefa(tarefa: tarefaDTO): Observable<tarefaDTO> {
        return this.http.put<tarefaDTO>(`${this.apiUrl}/${tarefa.id}`, tarefa);
    }

    deletarTarefa(id: number): Observable<void> {
        console.log(id);
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }

    filtrarTarefas(inicio: string, fim: string): Observable<tarefaDTO[]> {
        console.log(inicio);
        console.log(fim);
        return this.http.get<tarefaDTO[]>(this.apiUrl).pipe(
            map(tarefas => tarefas.filter(tarefa => {
                return tarefa.conclusao >= inicio && tarefa.conclusao <= fim;
            }))
        );
    }
}
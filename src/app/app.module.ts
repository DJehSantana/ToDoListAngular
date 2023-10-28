import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CardModule } from 'primeng/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DialogModule } from 'primeng/dialog';
import { DataViewModule } from 'primeng/dataview';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { AccordionModule } from 'primeng/accordion';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { TabMenuModule } from 'primeng/tabmenu';
import { TableModule } from 'primeng/table';

import { LOCALE_ID } from '@angular/core';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ErroApi } from './helpers/formatErrors/erroApi';
import { TarefaComponent } from './views/tarefa/tarefa.component';
import { CadastrarTarefaComponent } from './components/cadastrar-tarefa/cadastrar-tarefa.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { FutureDateDirective } from './resources/directives/future-date-directive.directive';
import { ListaTarefasComponent } from './views/lista-tarefas/lista-tarefas.component';
import { KanbanComponent } from './components/kanban/kanban.component';
import { HistoricoLogsComponent } from './components/historico-logs/historico-logs.component';

registerLocaleData(localePt);


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    TarefaComponent,
    CadastrarTarefaComponent,
    FutureDateDirective,
    ListaTarefasComponent,
    KanbanComponent,
    HistoricoLogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TabMenuModule,
    DataViewModule,
    TableModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    PanelModule,
    InputTextareaModule,
    BrowserAnimationsModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    AccordionModule,
    CardModule
  ],
  providers: [ErroApi, { provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }

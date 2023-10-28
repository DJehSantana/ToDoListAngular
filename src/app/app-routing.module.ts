import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ListaTarefasComponent } from './views/lista-tarefas/lista-tarefas.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tarefas', component: ListaTarefasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

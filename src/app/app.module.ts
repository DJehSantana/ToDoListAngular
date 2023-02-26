import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TabMenuModule } from 'primeng/tabmenu';
import { TableModule } from 'primeng/table';
import { LoginComponent } from './views/login/login.component';
import { UsuarioComponent } from './views/usuario/usuario.component';
import { CadastroUsuarioComponent } from './views/cadastro-usuario/cadastro-usuario.component';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { TableComponent } from './components/table/table.component';
import { UsuarioService } from './resources/services/usuario.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsuarioComponent,
    CadastroUsuarioComponent,
    HomeComponent,
    HeaderComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TabMenuModule,
    TableModule,
    FormsModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    CardModule
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public items: MenuItem[];
  activeItem: MenuItem;

  constructor() {
    this.items = [];
    this.activeItem = this.items[0];
  }

  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', url: 'http://localhost:4200/' },
      { label: 'Cadastro', url: 'http://localhost:4200/cadastro' },
      { label: 'Usuario' }
    ];
  }

}

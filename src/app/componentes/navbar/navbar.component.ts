import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  searchVisible: boolean = false; // Inicialmente, la barra de búsqueda está oculta

  toggleSearchBar() {
    this.searchVisible = !this.searchVisible; // Cambia el estado de visibilidad
  }
}

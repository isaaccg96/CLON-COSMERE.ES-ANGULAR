import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ArchivoTormentasComponent } from './archivo-tormentas/archivo-tormentas.component';
import { FichaProductoComponent } from './ficha-producto/ficha-producto.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent },  // Ruta para el index
  { path: '', component: IndexComponent },  // Ruta para el index
  { path: 'archivo', component: ArchivoTormentasComponent },  // Ruta para nueva pagina
  { path: 'ficha', component: FichaProductoComponent}, //Ruta ficha producto
  { path: 'ficha-producto/:id', component: FichaProductoComponent }  // Ruta para ficha de producto con parámetro :id
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

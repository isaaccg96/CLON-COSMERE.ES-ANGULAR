import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ArchivoTormentasComponent } from './archivo-tormentas/archivo-tormentas.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent },  // Ruta para el index
  { path: '', component: IndexComponent },  // Ruta para el index
  { path: 'archivo', component: ArchivoTormentasComponent },  // Ruta para nueva pagina
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

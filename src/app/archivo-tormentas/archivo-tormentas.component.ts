import { Component, OnInit } from '@angular/core';
import { ArchivoTormentasService } from '../services/archivo-tormentas.service';
import { HttpClient } from '@angular/common/http';

export interface Tormenta {
  image: string;
  alt: string;
  link: string;
  text: string;
  id: number;
  descripcion: string;
}

@Component({
  selector: 'app-archivo-tormentas',
  templateUrl: './archivo-tormentas.component.html',
  styleUrls: ['../archivo-tormentas/archivo-tormentas.component.scss']
})
export class ArchivoTormentasComponent implements OnInit {

  tormentas: Tormenta[] = [];  // Inicializamos como un array vacío de tipo Tormenta

  constructor(private archivoTormentasService: ArchivoTormentasService) { }

  ngOnInit(): void {
    this.archivoTormentasService.getTormentasData().subscribe(
      (data: Tormenta[]) => {
        this.tormentas = data;  // Asignamos los datos recibidos a tormentas
      },
      (error: any) => {
        console.error('Error al cargar los datos del JSON', error);  // Manejo del error
      }
    );
  }
}

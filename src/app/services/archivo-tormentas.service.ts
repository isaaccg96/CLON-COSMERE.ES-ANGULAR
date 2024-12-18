import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Tormenta {
  image: string;
  alt: string;
  link: string;
  text: string;
  id: number;
  descripcion: string;
}

@Injectable({
  providedIn: 'root'
})
export class ArchivoTormentasService {

  private jsonUrl = '../assets/JSON/gridData.json';  // Ruta correcta al archivo JSON

  constructor(private http: HttpClient) { }

  // Método para obtener los datos del JSON
  getTormentasData(): Observable<Tormenta[]> {
    return this.http.get<Tormenta[]>(this.jsonUrl);  // Devuelve un observable de Tormenta[]
  }
}

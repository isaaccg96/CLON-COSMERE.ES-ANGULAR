import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  private jsonUrl = '../assets/JSON/gallery.json';

  constructor(private http: HttpClient) {}

  getGalleryData(): Observable<any[]> {
    return this.http.get<any[]>(this.jsonUrl);
  }
}

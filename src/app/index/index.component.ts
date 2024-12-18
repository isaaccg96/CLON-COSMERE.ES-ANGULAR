import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../services/gallery.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  galleryData: any[] = []; // Todos los datos del JSON
  visibleGalleryData: any[] = []; // Datos visibles en pantalla
  itemsPerPage = 6; // Número de ítems a mostrar inicialmente

  constructor(private galleryService: GalleryService) {}

  ngOnInit(): void {
    this.galleryService.getGalleryData().subscribe((data) => {
      this.galleryData = data;
      this.loadMore(); // Cargar los primeros elementos
    });
  }

  loadMore(): void {
    const start = this.visibleGalleryData.length;
    const end = start + this.itemsPerPage;
    const newItems = this.galleryData.slice(start, end);
    this.visibleGalleryData = [...this.visibleGalleryData, ...newItems];
  }
}

import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'PRUEBABOOTSTRAP';
  showCarousel: boolean = false;
  showFooter: boolean = false; // Variable para controlar la visibilidad del pie de página
  videoSrc: string = '/assets/IMG/Fondocosmere.mp4'; // Video por defecto para el index
  
  constructor(private router: Router) {}

  ngOnInit() {
    // Filtramos solo los eventos NavigationEnd
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd) // Filtramos para asegurarnos de que solo manejamos NavigationEnd
    ).subscribe((event) => {
      // Usamos una afirmación de tipo para asegurarnos de que `event` es de tipo NavigationEnd
      const navigationEndEvent = event as NavigationEnd;

      // Determinamos si estamos en la página de inicio o en otra página
      if (navigationEndEvent.urlAfterRedirects === '/') {
        this.videoSrc = '/assets/IMG/Fondocosmere.mp4'; // Video para el index
        this.showCarousel = true; // Mostrar el carrusel en la página principal
        this.showFooter = true; // Mostrar el pie de página solo en la página de inicio
      } else if (navigationEndEvent.urlAfterRedirects === '/archivo') {
        this.videoSrc = '/assets/IMG/tormentas2.mp4'; // Video para el componente archivo
        this.showCarousel = false; // Ocultar el carrusel en la página archivo
        this.showFooter = false; // Ocultar el pie de página en la página archivo
      }
    });
  }

  onVideoLoaded(video: HTMLVideoElement): void {
    video.play().catch((error) => {
      console.error('Error al reproducir el video:', error);
    });
  }
}

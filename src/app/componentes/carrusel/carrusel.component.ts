import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.scss']
})
export class CarruselComponent implements AfterViewInit {
  @ViewChild('carousel', { static: false }) carousel!: ElementRef;
  @ViewChild('progressBar', { static: false }) progressBar!: ElementRef;

  intervalId: any;
  progress = 0;
  intervalDuration = 5000; // 5 segundos para un ciclo completo

  ngAfterViewInit(): void {
    this.startProgressBar();
  }

  startProgressBar() {
    this.progress = 0;
    this.intervalId = setInterval(() => {
      this.progress += 2; // Incremento del progreso
      if (this.progress >= 100) {
        this.progress = 0;
        this.moveToNextSlide();
      }
      this.updateProgressBar();
    }, this.intervalDuration / 50); // Dividimos el tiempo total en pequeños intervalos
  }

  updateProgressBar() {
    if (this.progressBar) {
      this.progressBar.nativeElement.style.width = `${this.progress}%`;
    }
  }

  moveToNextSlide() {
    const carousel = this.carousel.nativeElement;
    const nextButton = carousel.querySelector('.carousel-control-next');
    if (nextButton) {
      nextButton.click();
    }
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}

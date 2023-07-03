import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit, OnDestroy {
  images: string[] = [
    'assets/img/building.jpeg',
    'assets/img/maam.jpg',
   
  ];
  currentImage!: string;
  currentIndex = 0;
  isPaused = false;
  private intervalId: any;

  ngOnInit(): void {
    this.currentImage = this.images[this.currentIndex];
    this.startSlider();
  }

  ngOnDestroy(): void {
    this.stopSlider();
  }

  showPreviousImage(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.currentImage = this.images[this.currentIndex];
  }

  showNextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.currentImage = this.images[this.currentIndex];
  }

  toggleSlider(): void {
    this.isPaused = !this.isPaused;

    if (this.isPaused) {
      this.stopSlider();
    } else {
      this.startSlider();
    }
  }

  private startSlider(): void {
    this.intervalId = setInterval(() => {
      if (!this.isPaused) {
        this.showNextImage();
      }
    }, 3000);
  }

  private stopSlider(): void {
    clearInterval(this.intervalId);
  }
}
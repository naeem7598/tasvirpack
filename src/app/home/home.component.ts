import {Component, OnInit, ViewChild} from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Imagedata = new Array<string>();
  startIndex = 1;
  ngOnInit(): void {
    this.Imagedata = ['assets/image/slider/ok.png','assets/image/slider/header.jpg','assets/image/slider/slider-18.jpg'];
    this.Repeat()
  }
  Repeat() {
    setTimeout(() => {
      this.__FunctionSlide();
      this.Repeat();
    }, 4000);
  }

  __FunctionSlide() {
    const slides = Array.from(document.getElementsByClassName('mall-show-slide'));
    if (slides === []) {
      this.Repeat();
    }
    for (const x of slides) {
      const y = x as HTMLElement;
      y.style.display = 'none';
    }
    if (this.startIndex > slides.length - 1) {
      this.startIndex = 0;
      const slide = slides[this.startIndex] as HTMLElement;
      slide.style.display = 'block';
      this.startIndex++;
    } else {

      const slide = slides[this.startIndex] as HTMLElement;
      slide.style.display = 'block';
      this.startIndex++;
    }
  }
}




















// Repeat() {
//   setTimeout(() => {
//     this.__FunctionSlide();
//     this.Repeat();
//   }, 2000);
// }
//
// __FunctionSlide() {
//   const slides = Array.from(document.getElementsByClassName('mall-show-slide'));
//   if (slides === []) {
//     this.Repeat();
//   }
//   for (const x of slides) {
//     const y = x as HTMLElement;
//     y.style.display = 'none';
//   }
//   if (this.startIndex > slides.length - 1) {
//     this.startIndex = 0;
//     const slide = slides[this.startIndex] as HTMLElement;
//     slide.style.display = 'block';
//     this.startIndex++;
//   }
//   else {
//
//     const slide = slides[this.startIndex] as HTMLElement;
//     slide.style.display = 'block';
//     this.startIndex++;
//   }
// }

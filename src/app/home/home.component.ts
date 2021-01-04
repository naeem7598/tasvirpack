import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import SwiperCore ,{ Navigation, Pagination, Scrollbar, A11y }from "swiper/core"
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
// import "~swiper/swiper-bundle";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit{
  Image = new Array<string>();
  startIndex = 1;

  ngOnInit(): void {
    this.Image = [ 'assets/image/slider/header.jpg','assets/image/slider/slider-18.jpg','assets/image/slider/ok.png'];
    // this.Repeat()
  }

  ngAfterViewInit() {
    const swiper = new SwiperCore('.swiper-container', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',

      },
    });
  }

  // Repeat() {
  //   setTimeout(() => {
  //     this.__FunctionSlide();
  //     this.Repeat();
  //   }, 4000);
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
  //   } else {
  //
  //     const slide = slides[this.startIndex] as HTMLElement;
  //     slide.style.display = 'block';
  //     this.startIndex++;
  //   }
  // }
}












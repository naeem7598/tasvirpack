import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MessageService} from "./service/message.service";
import {Product} from "./products/model/product.model";
import {Category} from "./products/model/category.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tasvirpack';
  product = new Array<Product>();
  category = new Array<Category>();
  id: number;
  index: number;
  constructor() {


  }

  ngOnInit(): void {
    this.fillProduct()
    this.set_message()
  }
  set_message() {
    localStorage.removeItem('cat');
    localStorage.setItem("cat", JSON.stringify(this.category));
    localStorage.setItem("pro", JSON.stringify(this.product));
  }

  fillProduct() {
    this.product = [
      {
        id: 1,
        parentID: 1,
        title: 'انواع جعبه های مقوایی',
        categoryID: 1,
        image: 'assets/image/product/Changeable-side-pizza-box.jpg',
        chihds: []
      },
      {
        id: 2,
        parentID: 2,
        title: 'محصولات فست فودی',
        categoryID: 1,
        image: 'assets/image/product/17accc10-6e9f-4cf4-95c6-0b54bac9575b.jpg',
        chihds: [
          {
            id: 1,
            image: 'assets/image/product/sandevich/S102.jpg',
            parentID: 2,
            title: '',
            categoryID: 1,
            chihds: []
          },
              {
                id: 2,
                image: 'assets/image/product/pitza/pizza-box-isolated-on-white-background-design-vector-28646072.jpg',
                parentID: 2,
                title: '',
                categoryID: 1,
                chihds: []
              },{
                id: 3,
                image: 'assets/image/product/pitza/Pizza-Box-Template.jpg',
                parentID: 2,
                title: '',
                categoryID: 1,
                chihds: []
              }, {
                id: 4,
                image: 'assets/image/product/pitza/portfolio-5.jpg',
                parentID: 2,
                title: '',
                categoryID: 1,
                chihds: []
              },

          , {

            id: 5, image: 'assets/image/product/sandevich/S104.jpg', parentID: 2, title: '', categoryID: 1, chihds: []
          },{
            id: 6,
            image: 'assets/image/product/pitza/download (1).jpg',
            parentID: 2,
            title: '',
            categoryID: 1,
            chihds: []
          }]
      },
      {
        id: 3,
        parentID: 3,
        title: 'کارتن لمینتی',
        categoryID: 1,
        image: 'assets/image/product/17accc10-6e9f-4cf4-95c6-0b54bac9575b.jpg',
        chihds: [
          {
            id: 1,
            image: 'assets/image/product/karton-laminti/118.jpg',
            parentID: 3,
            title: '',
            categoryID: 1,
            chihds: []
          },
          {
            id: 2,
            image: 'assets/image/product/karton-laminti/119.jpg',
            parentID: 3,
            title: '',
            categoryID: 1,
            chihds: []
          },
          {
            id: 3,
            image: 'assets/image/product/karton-laminti/120.jpg',
            parentID: 3,
            title: '',
            categoryID: 1,
            chihds: []
          },{
            id: 3,
            image: 'assets/image/product/karton-laminti/121.jpg',
            parentID: 3,
            title: '',
            categoryID: 1,
            chihds: []
          },{
            id: 3,
            image: 'assets/image/product/karton-laminti/122.jpg',
            parentID: 3,
            title: '',
            categoryID: 1,
            chihds: []
          },{
            id: 3,
            image: 'assets/image/product/karton-laminti/123.jpg',
            parentID: 3,
            title: '',
            categoryID: 1,
            chihds: []
          },{
            id: 3,
            image: 'assets/image/product/karton-laminti/124.jpg',
            parentID: 3,
            title: '',
            categoryID: 1,
            chihds: []
          },{
            id: 3,
            image: 'assets/image/product/karton-laminti/125.jpg',
            parentID: 3,
            title: '',
            categoryID: 1,
            chihds: []
          },{
            id: 3,
            image: 'assets/image/product/karton-laminti/126.jpg',
            parentID: 3,
            title: '',
            categoryID: 1,
            chihds: []
          },{
            id: 3,
            image: 'assets/image/product/karton-laminti/127.jpg',
            parentID: 3,
            title: '',
            categoryID: 1,
            chihds: []
          }
        ]
      },
      {
        id: 1,
        parentID: 4,
        title: 'ساک خرید',
        categoryID: 2,
        image: 'assets/image/product/Changeable-side-pizza-box.jpg',
        chihds: []
      },{
        id: 2,
        parentID: 5,
        title: 'کاتالوگ و بروشور تراکت',
        categoryID: 2,
        image: 'assets/image/product/Changeable-side-pizza-box.jpg',
        chihds: []
      },
      {
        id: 3,
        parentID: 6,
        title: 'فولدر و پاکت',
        categoryID: 2,
        image: 'assets/image/product/Changeable-side-pizza-box.jpg',
        chihds: []
      },
      {
        id: 3,
        parentID: 7,
        title: 'ست اوراق اداری',
        categoryID: 2,
        image: 'assets/image/product/Changeable-side-pizza-box.jpg',
        chihds: []
      },{
        id: 3,
        parentID: 8,
        title: 'انواع تقویم و سررسید',
        categoryID: 2,
        image: 'assets/image/product/Changeable-side-pizza-box.jpg',
        chihds: []
      },
    ];


    let main = this.product;
    const cat1 = main.filter(p => p.categoryID === 1);
    main = this.product;
    const cat2 = main.filter(p => p.categoryID === 2);
    const cat3 = main.filter(p => p.categoryID === 3);
    const cat4 = main.filter(p => p.categoryID === 4);
    const cat5 = main.filter(p => p.categoryID === 5);

    // main = this.product;
    // // const cat13 = main.filter(p => p.categoryID ==3);

    this.category = [{id: 1, title: 'چاپ و بسته بندی', image: 'assets/image/slider-18.jpg', products: cat1},
      {id: 2, title: 'چاپ و تبلیغات', image: 'assets/image/20181211171355cat1.jpg', products: cat2},
      {id: 3, title: 'چاپ و فضای باز و بسته', image: 'assets/image/20181211171355cat1.jpg', products: cat3},
      {id:4, title: 'تابلو های تبلیغاتی', image: 'assets/image/20181211171355cat1.jpg', products: cat4},
      {id:5, title: 'صنایع نمایشگاهی', image: 'assets/image/20181211171355cat1.jpg', products: cat5},
    ]
    this.set_message();
  }
}






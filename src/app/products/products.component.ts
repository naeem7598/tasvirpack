import {Component, OnInit} from '@angular/core';
import {Product} from "./model/product.model";
import {Category} from "./model/category.model";
import {ActivatedRoute, Router} from "@angular/router";
import {MessageService} from "../service/message.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  product = new Array<Product>();
  category = new Array<Category>();
  id: number;
  index: number;


  constructor(private route: ActivatedRoute, private message: MessageService, private router: Router) {


  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(data => {
      this.id = Number(data.get('id'))
      this.category = JSON.parse(localStorage.getItem("cat"));
      this.product = JSON.parse(localStorage.getItem("pro"));
      this.product = this.product.filter(p => p.categoryID == this.id);
      this.index = this.category.findIndex(a => a.id == this.id);
    });
  }
  set_product(id:number) {
    this.router.navigate(['/product/' + id])
  }
}

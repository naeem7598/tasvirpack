import {Component, OnInit} from '@angular/core';
import {Product} from "../products/model/product.model";
import {Category} from "../products/model/category.model";
import {MessageService} from "../service/message.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product = new Array<Product>();
  temp = new Array<Product>();
  id: number;
  index:number;

  // category = new Category()
  constructor(private message: MessageService, private  route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(data=>{
      this.id = Number(data.get('id'));
      this.temp = new Array<Product>();
      this.temp = JSON.parse(localStorage.getItem("pro"));
      this.temp = this.temp.filter(p => p.parentID == this.id);
      this.index = this.temp.findIndex(a =>a.parentID == this.id);
      console.log(this.temp)
    })
    // this.temp = new Array<Product>();
    // this.temp = JSON.parse(localStorage.getItem("names"));
    // // this.id = this.route.snapshot.params.id;
    // this.temp = this.temp.filter(p => p.parentID == this.id);
    // this.index = this.temp.findIndex(a =>a.parentID == this.id);
  }

}

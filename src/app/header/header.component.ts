import {Component, OnInit} from '@angular/core';
import {style} from "@angular/animations";
import {element} from "protractor";
import {Product} from "../products/model/product.model";
import {Category} from "../products/model/category.model";
import {ActivatedRoute, Route} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // temp = new Array<Product>();
  cat = new Array <Category>();
  id :number;
  constructor(private route:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.cat=JSON.parse(localStorage.getItem("cat"));
 console.log(this.cat)
    window.onscroll = function () {
      var prevScrollpos = window.pageYOffset;
      var element = document.getElementById("menu");
      if (prevScrollpos > 50) {
        element.classList.add("sticky");
      } else {
        element.classList.remove("sticky")
      }

    }
  }

getID(){
console.log(this.cat)
  // this.temp = this.temp.filter(p =>p.categoryID == id)
  // console.log('fgsgrsdgwe'+this.temp)
}


  showmenu() {
    var x = document.getElementById("res-menu");
    var a = document.getElementById('menu-res')
    if (x.style.display === "none") {
      x.style.display = "block";

    } else {
      x.style.display = "none";
    }
    if (a.style.background === "none") {
      a.style.background = "white"
    } else {
      a.style.background = "none"
    }
  }
  stop_route(e){
    e.stopPropagation()
  }
}

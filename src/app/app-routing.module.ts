import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductsComponent} from "./products/products.component";
import {ProductComponent} from "./product/product.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'products/:id', component: ProductsComponent},
  {path:'product/:id',component:ProductComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  // {path:'product',component:ProductComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

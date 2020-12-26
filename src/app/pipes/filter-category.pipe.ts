import { Pipe, PipeTransform } from '@angular/core';
import {Product} from "../products/model/product.model";

@Pipe({
  name: 'filterCategory'
})
export class FilterCategoryPipe implements PipeTransform {

  transform(value: any, ...args: any[]): unknown {
    return null;
  }

}

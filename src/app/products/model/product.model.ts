export class Product{
  id:number;
  parentID:number;
  title:string;
  categoryID:number;
  // categoryName:string;
  chihds:Product[]=[];
  // parent:Product;
  image:string;
}

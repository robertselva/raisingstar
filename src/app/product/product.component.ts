import { Component } from "@angular/core";
import * as data from "./productdata.json";

@Component({
  selector: "product",
  templateUrl: "./product.component.html",
  styleUrls: ["../app.component.css"]
})
export class ProductComponent {
  productname: string = "Television of Robert";
  productmodel: string = "MX230";
  productmrp: string = "30000";
  productDesc: string =
    this.productname + " " + this.productmodel + " " + this.productmrp;
  products: any = (data as any).default;

  constructor(){}
  ngOnInit(){
    console.log(data);
  }
}

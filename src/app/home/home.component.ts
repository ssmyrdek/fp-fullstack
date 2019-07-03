import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../product/product.service';
import { Product } from '../product/model/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Product[] = [];
  returnedArray: any[];
  interval: any;

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.refreshData();
    this.interval = setInterval(() => {
      this.refreshData();
    }, 30000);
  }

  refreshData() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      let randomProduct = Math.floor((Math.random() * this.products.length) + 1);
      this.returnedArray = this.products.map(p => p.name).slice(randomProduct, randomProduct + 3);
    });
  }

}

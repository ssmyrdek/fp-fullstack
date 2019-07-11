import { Component, OnInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { ProductsService } from './product.service';
import { Product } from './model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];
  contentArray: string[] = [];
  returnedArray: string[] = [];

  constructor(private productService: ProductsService) {
  }

  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      this.contentArray = this.products.map(p => p.name);
      this.returnedArray = this.contentArray.slice(0, 10);
    });
  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.returnedArray = this.contentArray.slice(startItem, endItem);
  }

}

import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-product-list', templateUrl: './productlist.component.html'
})
export class ProductListComponent {
  public productList: Product[] = [];
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Product[]>(baseUrl + 'api/Products').subscribe(result => {
      this.productList = result;
    }, error => console.error(error));
  }
}
interface Product {
  productId: number;
  name: string;
  description: string;
  color: string;
  unitPrice: number;
}

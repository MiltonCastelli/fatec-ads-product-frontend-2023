import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [];

  constructor(private http: HttpClient) {

  }
  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:3000/products");
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';

@Injectable({
  //enjecte edilebilir demek.
  providedIn: 'root',
})
export class ProductService {
  url: string = 'https://localhost:5001/api/';
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<ListResponseModel<Product>> { //Ayrıca geri dönüş değeri ListResponseModel<Product> türünde olacak //metodun return değeri Observable yani subscribe olunabilir dedik.
    let allProductsUrl = this.url + 'products/getall';
    return this.httpClient //injection ile gelen nesne
      .get<ListResponseModel<Product>>(allProductsUrl); //httpClient'ın get metodu ile allProductsUrl'e request gönder
    //ve dönen response(Observable)  ListResponseModel<Product> Parse/Map et
  }

  getProductsByCategoryId(
    categoryId: number
  ): Observable<
    ListResponseModel<Product>
  > //number türünden categoryId parametresi alır. //Ayrıca geri dönüş değeri ListResponseModel<Product> türünde olacak //metodun return değeri Observable yani subscribe olunabilir dedik.
  {
    let productsByCategoryIdUrl =
      this.url + 'products/getallbycategoryid?categoryId=' + categoryId;
    return this.httpClient //injection ile gelen nesne
      .get<ListResponseModel<Product>>(productsByCategoryIdUrl); //httpClient'ın get metodu ile productsByCategoryIdUrl'e request gönder
    //ve dönen response(Observable)  ListResponseModel<Product> Parse/Map et
  }
}

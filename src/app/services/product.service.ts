import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; 
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';

@Injectable({//enjecte edilebilir demek.
  providedIn: 'root'
})
export class ProductService {
  url: string = 'https://localhost:5001/api/products/getall';
  constructor(private httpClient: HttpClient) {} 
  
  getProducts():Observable<ListResponseModel<Product>> 
  //metodun return değeri Observable yani subscribe olunabilir dedik.
  //Ayrıca geri dönüş değeri ListResponseModel<Product> türünde olacak
  {
    return this.httpClient //injection ile gelen nesne
      .get<ListResponseModel<Product>>(this.url) //httpClient'ın get metodu ile url'e request gönder
                                           //ve dönen response(Observable)  ListResponseModel<Product> Parse/Map et
  }


}

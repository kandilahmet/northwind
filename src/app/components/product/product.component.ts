import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  product1: Product = {
    productId: 1,
    productName: 'Bardak',
    categoryId: 1,
    unitPrice: 5,
    unitsInStock: 5,
  };
  product2: Product = {
    productId: 2,
    productName: 'Laptop',
    categoryId: 1,
    unitPrice: 5,
    unitsInStock: 5,
  };
  product3: Product = {
    productId: 3,
    productName: 'Mouse',
    categoryId: 1,
    unitPrice: 5,
    unitsInStock: 5,
  };
  product4: Product = {
    productId: 4,
    productName: 'Keyboard',
    categoryId: 1,
    unitPrice: 5,
    unitsInStock: 5,
  };
  product5: Product = {
    productId: 5,
    productName: 'Camera',
    categoryId: 1,
    unitPrice: 5,
    unitsInStock: 5,
  };

  products: Product[] = [
    this.product1,
    this.product2,
    this.product3,
    this.product4,
    this.product5,
  ];

  constructor() {}

  ngOnInit(): void {}
}

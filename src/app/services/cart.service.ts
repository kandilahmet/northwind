import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartItem';
import { CartItems } from '../models/cartItems';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  addToCart(product: Product) { 
    let item = CartItems.find((x) => x.product.productId === product.productId);
    if (item) {
      item.quantity += 1;
    } else {
      let newItem = new CartItem();
      newItem.quantity = 1;
      newItem.product = product;
      CartItems.push(newItem);
    }
  }
  removeFromCart(product: Product) { 
    let item = CartItems.find((x) => x.product.productId === product.productId);
    CartItems.splice(CartItems.indexOf(item),1);
  }

  listCart(): CartItem[] {
    return CartItems;
  }
}

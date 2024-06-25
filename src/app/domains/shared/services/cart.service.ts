import { Injectable, computed, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
// Store State Management, es una técnica que consiste en centralizar el estado de la aplicación en un solo lugar,
// de tal forma que todos los componentes de la aplicación puedan acceder a él.
export class CartService {
  //  Prop Drilling o Input Drilling, es una técnica que consiste en pasar datos a través de los componentes de la jerarquía de componentes de Angular.
  //  En este caso, se está pasando el producto a través de los componentes ProductComponent y ProductDetailComponent para agregarlo al carrito.
  cart = signal<Product[]>([]);
  total = computed(() => {
    const cart = this.cart();
    return cart.reduce((total, product) => total + product.price, 0);
  });

  constructor() {}

  addToCart(product: Product) {
    this.cart.update((state) => [...state, product]);
  }
}

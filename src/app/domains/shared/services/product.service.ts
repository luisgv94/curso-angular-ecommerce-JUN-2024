import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);

  constructor() {}

  getProducts(category_id?: string) {
    const url = new URL(`https://api.escuelajs.co/api/v1/products`);
    if (category_id) {
      url.searchParams.set('categoryId', category_id);
    }
    return this.http.get<Product[]>(url.toString());
  }

  getOne(id: string) {
    return this.http.get<Product>(
      `https://api.escuelajs.co/api/v1/products/${id}`
    );
  }

  // HTTP CLIENT EXAMPLES
  // private apiUrl = 'https://api.example.com'; // Reemplaza con la URL de tu API

  // GET: Obtener datos
  // getData(endpoint: string): Observable<any> {
  //   return this.http.get<any>(`${this.apiUrl}/${endpoint}`);
  // }

  // POST: Crear nuevo dato
  // createData(endpoint: string, data: any): Observable<any> {
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   });
  //   return this.http.post<any>(`${this.apiUrl}/${endpoint}`, data, { headers });
  // }

  // PUT: Actualizar dato existente
  // updateData(endpoint: string, id: number, data: any): Observable<any> {
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   });
  //   return this.http.put<any>(`${this.apiUrl}/${endpoint}/${id}`, data, { headers });
  // }

  // DELETE: Eliminar dato
  // deleteData(endpoint: string, id: number): Observable<any> {
  //   return this.http.delete<any>(`${this.apiUrl}/${endpoint}/${id}`);
  // }
}

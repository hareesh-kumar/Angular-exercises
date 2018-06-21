import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http: HttpClient) { }

  addNew(product: any) {
    return this._http.post('/prods', product);
  }
  getAll() {
    return this._http.get('/prods');
  }
  deletebyId(productid: string) {
    return this._http.delete('/prods/' + productid);
  }
  getbyId(productid: string) {
    return this._http.get('/prods/' + productid);
  }
  updatebyId(productid: string, product) {
    return this._http.put('/prods/' + productid , product);
  }
}

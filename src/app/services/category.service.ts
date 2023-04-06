import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryInterface } from '../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategory(): Observable<any> {
    const dataCategoria = this.http.get<CategoryInterface[]>('http://localhost:3001/categorias');
    return dataCategoria;
  }

  getSubCategoria(): Observable<any> {
    const dataSubCategoria = this.http.get<CategoryInterface[]>('http://localhost:3001/subcategorias');
    return dataSubCategoria;
  }

  getIndicadores(): Observable<any> {
    const dataIndicadores = this.http.get<CategoryInterface[]>('http://localhost:3001/indicadores');
    return dataIndicadores;
  }

  getSubIndicadores(): Observable<any> {
    const dataSubIndicadores = this.http.get<CategoryInterface[]>('http://localhost:3001/subindicadores');
    return dataSubIndicadores;
  }
}

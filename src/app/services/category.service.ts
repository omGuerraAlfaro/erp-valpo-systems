import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryInterface } from '../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  //Todos los datos.
  getAllCategory(): Observable<any> {
    const dataCategoria = this.http.get<CategoryInterface[]>('http://localhost:3001/categorias');
    return dataCategoria;
  }
  getAllSubCategoria(): Observable<any> {
    const dataSubCategoria = this.http.get<CategoryInterface[]>('http://localhost:3001/subcategorias');
    return dataSubCategoria;
  }
  getAllIndicadores(): Observable<any> {
    const dataIndicadores = this.http.get<CategoryInterface[]>('http://localhost:3001/indicadores');
    return dataIndicadores;
  }
  getAllSubIndicadores(): Observable<any> {
    const dataSubIndicadores = this.http.get<CategoryInterface[]>('http://localhost:3001/subindicadores');
    return dataSubIndicadores;
  }
/* **************************************************************************************************************************************************************** */

/* **************************************************************************************************************************************************************** */
  //Por Categoria
  //Activos
  /* GET */
  getCategoryAct(): Observable<any> {
    const dataCategoriaAct = this.http.get<CategoryInterface[]>('http://localhost:3001/categorias/activos');
    return dataCategoriaAct;
  }
  getCategorySubAct(): Observable<any> {
    const dataSubCategoriaAct = this.http.get<CategoryInterface[]>('http://localhost:3001/subcategorias/activos');
    return dataSubCategoriaAct;
  }
  getCategoryIndAct(): Observable<any> {
    const dataIndicadoresAct = this.http.get<CategoryInterface[]>('http://localhost:3001/indicadores/activos');
    return dataIndicadoresAct;
  }
  getCategorySubIndAct(): Observable<any> {
    const dataSubIndicadoresAct = this.http.get<CategoryInterface[]>('http://localhost:3001/subindicadores/activos');
    return dataSubIndicadoresAct;
  }
  

  /* POST */
  postCategoryAct(data: CategoryInterface): Observable<any> {
    const dataCategoriaAct = this.http.post<CategoryInterface>('http://localhost:3001/categorias/activos/agregar', data);
    return dataCategoriaAct;
  }






  /* **************************************************************************************************************************************************************** */

  /* **************************************************************************************************************************************************************** */
  //Pasivos
  getCategoryPas(): Observable<any> {
    const dataCategoriaPas = this.http.get<CategoryInterface[]>('http://localhost:3001/categorias/pasivos');
    return dataCategoriaPas;
  }

  /* **************************************************************************************************************************************************************** */

  /* **************************************************************************************************************************************************************** */
  //Patrimonio
  getCategoryPat(): Observable<any> {
    const dataCategoriaPat = this.http.get<CategoryInterface[]>('http://localhost:3001/categorias/patrimonio');
    return dataCategoriaPat;
  }



  /* **************************************************************************************************************************************************************** */

  /* **************************************************************************************************************************************************************** */
  //Ingresos
  getCategoryIng(): Observable<any> {
    const dataCategoriaIng = this.http.get<CategoryInterface[]>('http://localhost:3001/categorias/ingresos');
    return dataCategoriaIng;
  }



  /* **************************************************************************************************************************************************************** */

  /* **************************************************************************************************************************************************************** */
  //Egresos
  getCategoryEgr(): Observable<any> {
    const dataCategoriaEgr = this.http.get<CategoryInterface[]>('http://localhost:3001/categorias/egresos');
    return dataCategoriaEgr;
  }



}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryInterface } from '../interfaces/category';
import { CategoriaInterface } from '../interfaces/categoria';

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
  addSubCategory(id_subcategoria:string, cod_contable: number, descripcion: string, id_categoria: number ): Observable<any> {
    const dataCategoriaAct = this.http.post<CategoriaInterface>('http://localhost:3001/subcategorias/activos/agregar', { id_subcategoria, cod_contable, descripcion, id_categoria });
    return dataCategoriaAct;
  }
  /* DELETE */
  deleteSubCategory(id_subcategoria: string): Observable<any> {
    const dataCategoriaAct = this.http.delete<CategoriaInterface>(`http://localhost:3001/subcategorias/activos/eliminar/${id_subcategoria}`);
    return dataCategoriaAct;
  }






  /* **************************************************************************************************************************************************************** */

  /* **************************************************************************************************************************************************************** */
  //Pasivos
  getCategoryPas(): Observable<any> {
    const dataCategoriaPas = this.http.get<CategoryInterface[]>('http://localhost:3001/categorias/pasivos');
    return dataCategoriaPas;
  }
  getCategorySubPas(): Observable<any> {
    const dataSubCategoriaPas = this.http.get<CategoryInterface[]>('http://localhost:3001/subcategorias/pasivos');
    return dataSubCategoriaPas;
  }
  getCategoryIndPas(): Observable<any> {
    const dataIndicadoresPas = this.http.get<CategoryInterface[]>('http://localhost:3001/indicadores/pasivos');
    return dataIndicadoresPas;
  }
  getCategorySubIndPas(): Observable<any> {
    const dataSubIndicadoresPas = this.http.get<CategoryInterface[]>('http://localhost:3001/subindicadores/pasivos');
    return dataSubIndicadoresPas;
  }


  /* **************************************************************************************************************************************************************** */

  /* **************************************************************************************************************************************************************** */
  //Patrimonio
  getCategoryPat(): Observable<any> {
    const dataCategoriaPat = this.http.get<CategoryInterface[]>('http://localhost:3001/categorias/patrimonio');
    return dataCategoriaPat;
  }
  getCategorySubPat(): Observable<any> {
    const dataSubCategoriaPat = this.http.get<CategoryInterface[]>('http://localhost:3001/subcategorias/patrimonio');
    return dataSubCategoriaPat;
  }
  getCategoryIndPat(): Observable<any> {
    const dataIndicadoresPat = this.http.get<CategoryInterface[]>('http://localhost:3001/indicadores/patrimonio');
    return dataIndicadoresPat;
  }
  getCategorySubIndPat(): Observable<any> {
    const dataSubIndicadoresPat = this.http.get<CategoryInterface[]>('http://localhost:3001/subindicadores/patrimonio');
    return dataSubIndicadoresPat;
  }
  /* **************************************************************************************************************************************************************** */

  /* **************************************************************************************************************************************************************** */
  //Ingresos
  getCategoryIng(): Observable<any> {
    const dataCategoriaIng = this.http.get<CategoryInterface[]>('http://localhost:3001/categorias/ingresos');
    return dataCategoriaIng;
  }
  getCategorySubIng(): Observable<any> {
    const dataSubCategoriaIng = this.http.get<CategoryInterface[]>('http://localhost:3001/subcategorias/ingresos');
    return dataSubCategoriaIng;
  }
  getCategoryIndIng(): Observable<any> {
    const dataIndicadoresIng = this.http.get<CategoryInterface[]>('http://localhost:3001/indicadores/ingresos');
    return dataIndicadoresIng;
  }
  getCategorySubIndIng(): Observable<any> {
    const dataSubIndicadoresIng = this.http.get<CategoryInterface[]>('http://localhost:3001/subindicadores/ingresos');
    return dataSubIndicadoresIng;
  }
  /* **************************************************************************************************************************************************************** */

  /* **************************************************************************************************************************************************************** */
  //Egresos
  getCategoryEgr(): Observable<any> {
    const dataCategoriaEgr = this.http.get<CategoryInterface[]>('http://localhost:3001/categorias/egresos');
    return dataCategoriaEgr;
  }
  getCategorySubEgr(): Observable<any> {
    const dataSubCategoriaEgr = this.http.get<CategoryInterface[]>('http://localhost:3001/subcategorias/egresos');
    return dataSubCategoriaEgr;
  }
  getCategoryIndEgr(): Observable<any> {
    const dataIndicadoresEgr = this.http.get<CategoryInterface[]>('http://localhost:3001/indicadores/egresos');
    return dataIndicadoresEgr;
  }
  getCategorySubIndEgr(): Observable<any> {
    const dataSubIndicadoresEgr = this.http.get<CategoryInterface[]>('http://localhost:3001/subindicadores/egresos');
    return dataSubIndicadoresEgr;
  }
  /* **************************************************************************************************************************************************************** */



}

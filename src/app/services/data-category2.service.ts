import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryInterface } from '../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class DataCategory2Service {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'AccessControlAllowOrigin': '*'
    })
  };

  constructor(private http: HttpClient) { }

  getCategoryActivoValor(): Observable<any> {
    const dataCategoria = this.http.get<CategoryInterface[]>('https://raw.githubusercontent.com/omGuerraAlfaro/json2/main/erp/dataActivoValor.json');
    return dataCategoria;
  }
  getCategoryPasivoValor(): Observable<any> {
    const dataCategoria = this.http.get<CategoryInterface[]>('https://raw.githubusercontent.com/omGuerraAlfaro/json2/main/erp/dataPasivosValor.json');
    return dataCategoria;
  }
  getCategoryPatrimonioValor(): Observable<any> {
    const dataCategoria = this.http.get<CategoryInterface[]>('https://raw.githubusercontent.com/omGuerraAlfaro/json2/main/erp/dataPatrimonioValor.json');
    return dataCategoria;
  }
  getCategoryIngresoValor(): Observable<any> {
    const dataCategoria = this.http.get<CategoryInterface[]>('https://raw.githubusercontent.com/omGuerraAlfaro/json2/main/erp/dataIngresoValor.json');
    return dataCategoria;
  }
  getCategoryEgresoValor(): Observable<any> {
    const dataCategoria = this.http.get<CategoryInterface[]>('https://raw.githubusercontent.com/omGuerraAlfaro/json2/main/erp/dataEgresoValor.json');
    return dataCategoria;
  }
  
}

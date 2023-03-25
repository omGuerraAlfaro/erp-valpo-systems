import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryInterface } from '../interfaces/category';


@Injectable({
  providedIn: 'root'
})
export class DataCategoryService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'AccessControlAllowOrigin': '*'
    })
  };

  constructor(private http: HttpClient) { }

  getCategoryActivo(): Observable<any> {
    const dataCategoria = this.http.get<CategoryInterface[]>('https://raw.githubusercontent.com/omGuerraAlfaro/json2/main/data.json');
    return dataCategoria;
  }
  getCategoryPasivo(): Observable<any> {
    const dataCategoria = this.http.get<CategoryInterface[]>('https://raw.githubusercontent.com/omGuerraAlfaro/json2/main/dataPasivos.json');
    return dataCategoria;
  }
  getCategoryPatrimonio(): Observable<any> {
    const dataCategoria = this.http.get<CategoryInterface[]>('https://raw.githubusercontent.com/omGuerraAlfaro/json2/main/dataPatrimonio.json');
    return dataCategoria;
  }
  getCategoryIngreso(): Observable<any> {
    const dataCategoria = this.http.get<CategoryInterface[]>('https://raw.githubusercontent.com/omGuerraAlfaro/json2/main/dataIngreso.json');
    return dataCategoria;
  }
  getCategoryEgreso(): Observable<any> {
    const dataCategoria = this.http.get<CategoryInterface[]>('https://raw.githubusercontent.com/omGuerraAlfaro/json2/main/dataEgreso.json');
    return dataCategoria;
  }



  
}

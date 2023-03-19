import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../interfaces/category';


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

  getCategory(): Observable<any> {
    const dataCategoria = this.http.get<any[]>('https://raw.githubusercontent.com/omGuerraAlfaro/json2/main/data.json');
    return dataCategoria;
  }
}

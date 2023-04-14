import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VtigerService {

  constructor(private http: HttpClient) { }
  private api = 'http://localhost:3000/';
  //Movimientos.
  getCompanyInfo(): Observable<any> {
    const dataVtiger = this.http.get(this.api + 'query');
    return dataVtiger;
  }
}

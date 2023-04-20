import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VtigerService {

  constructor(private http: HttpClient) { }
  
  private API_URL = 'http://localhost:3000/';
  //Movimientos.
  getMovInfo(): Observable<any> {
    const dataVtiger = this.http.get(this.API_URL + 'query');
    return dataVtiger;
  }

  getInvoices(excludedInvoiceNos: string[]): Observable<any> {
    const excludedInvoiceNosParam = excludedInvoiceNos.join(',');
    return this.http.get(`${this.API_URL}?excludedInvoiceNos=${excludedInvoiceNosParam}`);
  }
  

  

}

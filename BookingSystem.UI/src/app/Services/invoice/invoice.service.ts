import { Invoice } from './../../models/invoice.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Customer } from 'src/app/models/customer.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) {}

  getAllInvoice(): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(this.baseApiUrl + 'api/Invoice/getInvoice');
  }

  addInvoice(addInvoiceReq: Invoice): Observable<Invoice> {
    return this.http.post<Invoice>(
      this.baseApiUrl + 'api/Invoice/addInvoice',
      addInvoiceReq
    );
  }

  getInvoice(invoiceId: number): Observable<Invoice> {
    return this.http
      .get<Invoice[]>(this.baseApiUrl + 'api/Invoice/getInvoiceById/' + invoiceId)
      .pipe(map((response) => response[0]));
  }
  getAllCustomer(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.baseApiUrl + 'api/Customer/getCustomer');
  }

  updateInvoice(invoiceId: number, editInvoiceReq: Invoice): Observable<Invoice> {
    return this.http.put<Invoice>(
      this.baseApiUrl + `api/Invoice/updateInvoice/` + invoiceId,
      editInvoiceReq
    );
  }

  deleteInvoice(invoiceId: number): Observable<Invoice> {
    return this.http.delete<Invoice>(
      this.baseApiUrl + `api/Invoice/deleteInvoice/` + invoiceId
    );
  }
}
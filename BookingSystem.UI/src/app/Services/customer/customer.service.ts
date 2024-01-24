import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Customer } from 'src/app/models/customer.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) {}

  getAllCustomer(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.baseApiUrl + 'api/Customer/getCustomer');
  }

  addCustomer(addCustomerReq: Customer): Observable<Customer> {
    return this.http.post<Customer>(
      this.baseApiUrl + 'api/Customer/addCustomer',
      addCustomerReq
    );
  }

  getCustomer(c_id: number): Observable<Customer> {
    return this.http
      .get<Customer[]>(this.baseApiUrl + 'api/Customer/getCustomerById/' + c_id)
      .pipe(map((response) => response[0]));
  }

  updateCustomer(c_id: number, editCustomerReq: Customer): Observable<Customer> {
    return this.http.put<Customer>(
      this.baseApiUrl + `api/Customer/updateCustomer/` + c_id,
      editCustomerReq
    );
  }

  deleteCustomer(c_id: number): Observable<Customer> {
    return this.http.delete<Customer>(
      this.baseApiUrl + `api/Customer/deleteCustomer/` + c_id
    );
  }
}
